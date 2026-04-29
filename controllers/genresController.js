const { matchedData, validationResult } = require('express-validator');

const db = require('../db/genres');
const CustomNotFoundError = require('../errors/CustomNotFoundError');
const { validateGenre } = require('../middleware/validation');

// Get all the categories
const getAllGenres = async (request, response) => {
    const genres = await db.getAllGenres();
    if (!genres) throw new CustomNotFoundError('No Genres Found');
    response.render('genres', { genres });
};

// Handle the get request for add a new genre form
const getAddNewGenreForm = (request, response) => {
    response.render('add-genre', {
        title: 'Add a new genre',
        action: '/genres/new',
        errors: [],
        formData: {
            genre: '',
            color: '#ffffff',
        },
    });
};

// Handle the post request for add a new genre form
const postAddNewGenreForm = [
    validateGenre,

    async (request, response) => {
        const errors = validationResult(request);

        if (!errors.isEmpty()) {
            return response.status(400).render('add-genre', {
                title: 'Add a new genre',
                action: '/genres/new',
                errors: errors.array(),
                formData: request.body,
            });
        }

        // Get needed data and clean it up
        let { genre, color } = matchedData(request);

        genre = genre.trim();
        genre = genre.charAt(0).toUpperCase() + genre.slice(1).toLowerCase();

        // Add data into the db, and redirect to overall genres.
        await db.createAGenre({ color, name: genre });
        return response.redirect('/genres');
    },
];

/* Edit a form */
const getEditGenreForm = async (request, response) => {
    const { id } = request.params;

    const genreInEdit = await db.getGenreById(Number(id));

    // Throw error if genre is not found.
    if (!genreInEdit) throw new CustomNotFoundError('Genre not Found');

    // Proceed to render form with existing data
    const { name, color } = genreInEdit;

    response.render('add-genre', {
        title: 'Editing a genre',
        action: `/genres/${id}/edit`,
        errors: [],
        formData: {
            genre: name,
            color,
        },
    });
};

const postEditGenreForm = [
    validateGenre,

    async (request, response) => {
        const { id } = request.params;

        const errors = validationResult(request);

        // Validation error handling.
        if (!errors.isEmpty()) {
            return response.status(400).render('add-genre', {
                title: 'Editing a genre',
                action: `/genres/${id}/edit`,
                errors: errors.array(),
                formData: request.body,
            });
        }

        // Prepre data for update
        let { genre, color } = matchedData(request);

        genre = genre.trim();
        genre = genre.charAt(0).toUpperCase() + genre.slice(1).toLowerCase();

        // Update data in db and retun new updated genre
        const updatedGenre = await db.updateASpecificGenre({ id, color, name: genre, });

        // Throw error if operation fails else redirect to all genres.
        if (!updatedGenre) throw new CustomNotFoundError('Genre not found');
        return response.redirect('/genres');
    },
];

/* Delete a genre */
const postDeleteGenre = async (request, response) => {
    const { id } = request.params;
    const deletedGenre = await db.deleteGenre(Number(id));
    if (!deletedGenre) throw new CustomNotFoundError('The genre you are deleting does not exist!');
    return response.redirect('/genres');
};

module.exports = {
    getAllGenres,
    getAddNewGenreForm,
    postAddNewGenreForm,
    getEditGenreForm,
    postEditGenreForm,
    postDeleteGenre,
};