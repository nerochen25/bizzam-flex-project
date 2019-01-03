const express = require("express");
const router = express.Router();
const passport = require('passport');
const Theme = require('../../models/Theme')
const validateThemeInput = require('../../validation/theme')
const validateThemeItemInput = require('../../validation/theme_items')

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


router.post('/item',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        
        Theme
            .findById( req.body.theme_id )
            .then(theme => {
                const { isValid, errors } = validateThemeItemInput(req.body);

                if (!isValid) {
                    return res.status(400).json(errors);
                }

                let newThemeItem = {
                    text: req.body.text
                }

                theme.themeItems.push(newThemeItem)

                theme
                    .save()
                    .then(theme => res.json(theme))
            })
            .catch(err => res.status(400).json(err))
    }
)


router.post('/items',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Theme
            .findById( req.body.theme_id )
            .then(theme => {
                let items = req.body.items.split(",");
                // return res.json(req.body.items)
                items.forEach(item => {
                    let themeItem = { text: item }
                    
                    const { isValid, errors } = validateThemeItemInput(themeItem);

                    if (!isValid) {
                        return res.status(401).json(errors);
                    }

                    theme.themeItems.push(themeItem)
                });

                return theme
                    .save()
                    .then(theme => res.json({theme}))
                    .catch(err => res.status(400).json(err))
            })
            .catch(err => res.status(400).json(err))
    }
)



module.exports = router;