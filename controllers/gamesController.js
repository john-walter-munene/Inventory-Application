const { body, validationResult, matchedData } = require('express-validator');
const db = require('../db/games');
const genresDb = require('../db/genres');
const { request, response } = require('express');

const searchGames = async (request, response) => {
    const { search } = request.query;
    const results = await db.searchGames(search);
    response.render('search', { search: search, results: results || [] });
};

const getGamesByGenreId = async (request, response) => {
    const { id } = request.params;
    const order = 'title-ascending';
    const results = await db.getGamesByGenreId(Number(id), order);
    const genreName = results.length > 0 ? results[0].genre_name: 'Selected Genre';
    response.render('games-by-genre', { genreName, results });
};

const getAllGames = async (request, response) => {
    const { order } = request.query;
    let genresList = request.query.genres || [];

    if (!Array.isArray(genresList)) genresList = [genresList];
    genresList = genresList.map(Number);

    let games;
    const hasFilters = genresList.length > 0 || order;

    if (hasFilters) games = await db.getGamesFiltered({ genresList, order });
    else games = await db.getAllGames();

    const listOfGenres = await genresDb.getAllGenres();
    response.render('games', { games, genres: listOfGenres});
};

const getGameById = async (request, response) => {
    const { id } = request.params;
    const game = await db.getGameById(Number(id));
    if (!game) return response.status(404).send("Game not found");
    response.render('game', { game });
};

module.exports = { searchGames, getGamesByGenreId, getAllGames, getGameById };