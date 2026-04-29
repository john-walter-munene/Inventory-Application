// Package imports
const { validationResult, matchedData } = require('express-validator');
const fs = require("fs");

// Own module imports
const db = require('../db/games');
const genresDb = require('../db/genres');
const { upload, deleteGameImage } = require("../middleware/image-handler");
const { validateGame } = require('../middleware/validation');
const CustomNotFoundError = require('../errors/CustomNotFoundError');

// Handle a search request
const searchGames = async (request, response) => {
    const { search } = request.query;
    const results = await db.searchGames(search);
    response.render('search', { search: search, results: results || [] });
};

// Handle get games in a specific genre
const getGamesByGenreId = async (request, response) => {
    const { id } = request.params;
    const order = 'title-ascending';
    const results = await db.getGamesByGenreId(Number(id), order);

    // If genre does not exist throw an error
    if (!results) throw new CustomNotFoundError('The genre you requested does not exist');

    // Get genre name and render results
    const genreName = results.length > 0 ? results[0].genre_name: 'Selected Genre';
    response.render('games-by-genre', { genreName, results });
};


const getAllGames = async (request, response) => {
    try {
        const { order } = request.query;

        let genresList = request.query.genres || [];

        // if only one checkbox selected push into an array
        if (!Array.isArray(genresList)) genresList = [genresList];

        // convert to numbers
        genresList = genresList .map(Number).filter(id => !isNaN(id));

        const selectedOrder = order || "title-ascending";
        const hasFilters = genresList.length > 0 || request.query.order;

        let games;

        if (hasFilters) games = await db.getGamesFiltered({ genresList, order: selectedOrder });
        else games = await db.getAllGames();

        const listOfGenres = await genresDb.getAllGenres();
        response.render("games", {
            games,
            genres: listOfGenres,
            selectedGenres: genresList,
            selectedOrder
        });

    } catch (error) {
        console.error(error);
        throw new CustomNotFoundError(error);
    }
};

const getGameById = async (request, response) => {
    const { id } = request.params;
    const game = await db.getGameById(Number(id));
    if (!game) throw new CustomNotFoundError('Game not found');
    response.render('game', { game });
};

const getNewGameForm = async (request, response) => {
    try {
        const genresList = await genresDb.getAllGenres();

        response.render('add-game', {
            title: 'Add a New Game',
            action: '/games/new',
            genresList,
            errors: [],
            formData: {
                title: '',
                price: '',
                quantity: '',
                genre: '',
                description: ''
            }
        });

    } catch (error) {
        console.error(error);
        throw new CustomNotFoundError('Failed to load form.');
    }
};

const postNewGame = [
    upload.single('image'),
    validateGame,

    async (request, response) => {

        const errors = validationResult(request);

        // Check for image first
        if (!request.file) errors.errors.push({ msg: "Image is required", param: "image" });
        

        if (!errors.isEmpty()) {
            const genresList = await genresDb.getAllGenres();

            // cleanup uploaded file if validation fails
            if (request.file) fs.unlinkSync(request.file.path);

            return response.status(400).render("add-game", {
                title: "Add a New Game",
                action: "/games/new",
                genresList,
                errors: errors.array(),
                formData: request.body
            });
        }

        try {
            // Prepare data for entry into db
            const { title, price, quantity, genre, description } = matchedData(request);
            const imageUrl = request.file ? `/uploads/${request.file.filename}`: "";

            const createdGame = await db.createGame({
                title,
                price,
                quantity,
                genre_id: genre,
                description,
                image_url: imageUrl
            });

            return response.redirect("/games");

        } catch (error) {
            console.error(error);
            const genresList = await genresDb.getAllGenres();
            if (request.file) fs.unlinkSync(request.file.path);

            return response.status(500).render("add-game", {
                title: "Add a New Game",
                action: "/games/new",
                genresList,
                errors: [{ msg: "Failed to create game." }],
                formData: request.body
            });
        }
    }
];

const deleteGame = async (request, response) => {
    try {
        const { id } = request.params;

        const game = await db.getGameById(id);
        if (!game) throw new CustomNotFoundError('Game on delete does not exists');

        // delete file if needed and DB record
        deleteGameImage(game.image_url);
        await db.deleteGame(id);
        
        return response.redirect("/games");

    } catch (error) {
        console.error(error);
        throw new CustomNotFoundError('Failed to delete game');
    }
};

const getEditGameForm = async (request, response) => {
    const { id } = request.params;

    // Get game data from db || throw an error if it doesn't exist.
    const game = await db.getGameById(Number(id));
    if (!game) throw new CustomNotFoundError('Game not Found');

    // Get all genres, and prepare view with game details.
    const genresList = await genresDb.getAllGenres();

    response.render("edit-game", {
        title: "Editing an existing Game",
        action: `/games/${game.id}/edit`,
        genresList,
        errors: [],
        formData: {
            title: game.title,
            price: game.price,
            quantity: game.quantity,
            genre: game.genre_id,
            description: game.description
        },
    });
};

const postEditGameForm = [
    upload.single("image"),
    validateGame,

    async (request, response) => {
        const gameId = request.params.id;
        const errors = validationResult(request);
        const game = await db.getGameById(gameId);

        if (!game) throw new CustomNotFoundError('Game not found');

        // Handle validation errors
        if (!errors.isEmpty()) {
            const genresList = await genresDb.getAllGenres();

            return response.status(400).render("edit-game", {
                title: "Editing an existing Game",
                action: `/games/${gameId}/edit`,
                genresList,
                errors: errors.array(),
                formData: {
                    ...request.body,
                    image_url: game.image_url
                }
            });
        }

        // Extract validated data
        const data = matchedData(request);

        // Default: keep existing image
        let imageUrl = game.image_url;

        // If new image uploaded → replace + delete old one
        if (request.file) {
            deleteGameImage(game.image_url);
            imageUrl = `/uploads/${request.file.filename}`;
        }

        // Build update object
        const updatedGame = {
            id: gameId,
            title: data.title,
            description: data.description,
            price: data.price,
            quantity: data.quantity,
            genre_id: data.genre,
            image_url: imageUrl
        };

        // Update DB
        await db.updateGame(updatedGame);
        return response.redirect(`/games/${gameId}`);
    }
];

module.exports = { 
    searchGames, 
    getGamesByGenreId, 
    getAllGames, 
    getGameById, 
    getNewGameForm,
    postNewGame, 
    deleteGame,
    getEditGameForm,
    postEditGameForm,
};