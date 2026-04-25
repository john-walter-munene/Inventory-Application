const { Router } = require('express');
const genresRouter = Router();
const { 
    getAllGenres, 
    getAddNewGenreForm, 
    postAddNewGenreForm, 
    getEditGenreForm,
    postEditGenreForm,
    postDeleteGenre,
} = require('../controllers/genresController');

genresRouter.get('/', getAllGenres); 

genresRouter.get('/new', getAddNewGenreForm);
genresRouter.post('/new', postAddNewGenreForm);

genresRouter.get('/:id/edit', getEditGenreForm);
genresRouter.post('/:id/edit', postEditGenreForm);

genresRouter.post('/:id/delete', postDeleteGenre);

module.exports = genresRouter;