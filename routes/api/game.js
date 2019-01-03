const express = require("express");
const router = express.Router();
const passport = require('passport');
const Game = require('../../models/Game');
const validateGameInput = require('../../validation/game')

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { isValid, errors } = validateGameInput(req.body)

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newGame = new Game(req.body)

        newGame
            .save()
            .then(game => res.json(game))
    }
)





module.exports = router;