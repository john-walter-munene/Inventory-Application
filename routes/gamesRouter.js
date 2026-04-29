const { Router } = require('express');
const gamesRouter = Router();

const {
    searchGames,
    getGamesByGenreId,
    getAllGames,
    getGameById,
    getGamesSearchPage,
    getNewGameForm,
    postNewGame,
    deleteGame,
    getEditGameForm,
    postEditGameForm,
} = require('../controllers/gamesController');

// Read actions
gamesRouter.get('/search', searchGames);
gamesRouter.get('/genre/:id', getGamesByGenreId);
gamesRouter.get('/', getAllGames);

// Create actions
gamesRouter.get('/new', getNewGameForm);
gamesRouter.post('/new', postNewGame);

// Edit actions
gamesRouter.get('/:id/edit', getEditGameForm);
gamesRouter.post('/:id/edit', postEditGameForm);

// Delete actions
gamesRouter.post('/:id/delete', deleteGame);

// Single game read: positioned last to avoid cascading it into wrong handler
gamesRouter.get('/:id', getGameById);

module.exports = gamesRouter;