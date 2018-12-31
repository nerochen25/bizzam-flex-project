const express = require("express");
const router = express.Router();
const passport = require('passport');
const Theme = require('../../models/Theme');
const Game = require('../../models/Game');
const validateGameInput = require('../../validation/game')

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { isValid, errors } = validateGameInput(req.body)
    }
)




module.exports = router;