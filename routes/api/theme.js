const express = require("express");
const router = express.Router();
const passport = require('passport');
const Theme = require('../../models/Theme')
const validateThemeInput = require('../../validation/themes')

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { isValid, errors } = validateThemeInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }


        const newTheme = new Theme({
            name: req.body.name,
            description: req.body.description
        })

        newTheme
            .save()
            .then(theme => res.json(theme))
    }
)