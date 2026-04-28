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
    getEditGameForm,
    postEditGame,
    deleteGame
} = require('../controllers/gamesController');

// browse catalog (filters, sorting, genre browsing, searching)

gamesRouter.get('/search', searchGames);
gamesRouter.get('/genre/:id', getGamesByGenreId);
gamesRouter.get('/', getAllGames);

// // create
// gamesRouter.get('/new', getNewGameForm);
// gamesRouter.post('/new', postNewGame);

// // edit
// gamesRouter.get('/:id/edit', getEditGameForm);
// gamesRouter.post('/:id/edit', postEditGame);

// // delete
// gamesRouter.post('/:id/delete', deleteGame);

// // single game view (keep last so it doesn't catch /search or /new)
gamesRouter.get('/:id', getGameById);

module.exports = gamesRouter;