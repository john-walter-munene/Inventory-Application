const { body } = require("express-validator");

// validate a genre.
const validateGenre = [
    body('genre')
        .trim()
        .isLength({ min: 3 })
        .withMessage('Genre must be at least 3 characters'),

    body('color')
        .notEmpty()
        .withMessage('Please select a color'),
];

// Validate a game.
const validateGame = [
    body("title")
        .trim()
        .isLength({ min: 2 })
        .withMessage("Title must be at least 2 characters"),

    body("price")
        .notEmpty()
        .withMessage("Price is required")
        .isFloat({ min: 0 })
        .withMessage("Price must be a valid number"),

    body("quantity")
        .notEmpty()
        .withMessage("Quantity is required")
        .isInt({ min: 0 })
        .withMessage("Quantity must be 0 or more"),

    body("genre")
        .notEmpty()
        .withMessage("Please select a genre"),

    body("description")
        .trim()
        .isLength({ min: 5 })
        .withMessage("Description must be at least 5 characters")
];

module.exports = { validateGenre, validateGame };