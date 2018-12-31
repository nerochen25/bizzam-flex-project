const express = require("express");
const router = express.Router();
const passport = require('passport');
<<<<<<< HEAD
const Theme = require('../../models/Theme');
const Game = require('../../models/Game');
const validateGameInput = require('../../validation/game')

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { isValid, errors } = validateGameInput(req.body)
    }
)

=======
const Game = require('../../models/game')
const validateGameInput = require('../../validation/game')

>>>>>>> 26f840f1f4fb99ad3729715bda8d927f2a23bb0a



module.exports = router;