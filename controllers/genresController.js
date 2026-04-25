const { body, validationResult, matchedData } = require('express-validator');
const db = require('../db/genres');

// Genres validation.
const validateGenre = [
    body('genre')
        .trim()
        .isLength({ min: 3 })
        .withMessage('Genre must be at least 3 characters'),

    body('color')
        .notEmpty()
        .withMessage('Please select a color'),
];

// Get all the categories
const getAllGenres = async (request, response) => {
    const genres = await db.getAllGenres();
    response.render('genres', { genres });
};

const getAddNewGenreForm = (request, response) => {
    response.render('add-genre', {
        title: 'Add a new genre',
        action: '/genres/new',
        errors: [],
        formData: { genre: '', color: '#ffffff' }
    });
};

const postAddNewGenreForm = [
    validateGenre,

    async (request, response) => {
        const errors = validationResult(request);

        if (!errors.isEmpty()) {
            return response.status(400).render('add-genre', {
                title: 'Add a new genre',
                action: '/genres/new',
                errors: errors.array(),
                formData: request.body
            });
        }

        let { genre, color } = matchedData(request);

        genre = genre.trim();
        genre = genre.charAt(0).toUpperCase() + genre.slice(1).toLowerCase();

        await db.createAGenre({ name: genre, color });

        return response.redirect('/genres');
    },
];

const getEditGenreForm = async (request, response) => {
    const { id } = request.params;

    const genreInEdit = await db.getGenreById(Number(id));

    if (!genreInEdit) {
        return response.status(404).send("Genre not found!");
    }

    const { name, color } = genreInEdit;

    response.render('add-genre', {
        title: 'Editing a genre',
        action: `/genres/${id}/edit`, // ✅ FIXED
        errors: [],
        formData: {
            genre: name,
            color
        }
    });
};

const postEditGenreForm = [
    validateGenre,

    async (request, response) => {
        const { id } = request.params;
        const errors = validationResult(request);

        if (!errors.isEmpty()) {
            return response.status(400).render('add-genre', {
                title: 'Editing a genre',
                action: `/genres/${id}/edit`, // ✅ FIXED
                errors: errors.array(),
                formData: request.body
            });
        }

        let { genre, color } = matchedData(request);

        genre = genre.trim();
        genre = genre.charAt(0).toUpperCase() + genre.slice(1).toLowerCase();

        const updatedGenre = await db.updateASpecificGenre({
            id,
            name: genre,
            color
        });

        if (!updatedGenre) {
            return response.status(404).send("Genre not found!");
        }

        return response.redirect('/genres');
    }
];

const postDeleteGenre = async (request, response) => {
    const { id } = request.params;
    const deletedGenre = await db.deleteGenre(Number(id));
    if (!deletedGenre) return response.status(404).send("Genre not found!");
    return response.redirect('/genres');
};

module.exports = {
    getAllGenres,
    getAddNewGenreForm,
    postAddNewGenreForm,
    getEditGenreForm,
    postEditGenreForm,
    postDeleteGenre
};