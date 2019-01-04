const express = require("express");
const router = express.Router();
const passport = require('passport');
const Game = require('../../models/Game');
const validateGameInput = require('../../validation/game')



router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { isValid, errors } = validateGameInput(req.body)

        const newGame = new Game(req.body)

        newGame
            .save()
            .then(game => res.json(game))
    }
)





module.exports = router;