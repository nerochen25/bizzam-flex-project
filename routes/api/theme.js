const express = require("express");
const router = express.Router();
const passport = require('passport');
const Theme = require('../../models/Theme');
const validateThemeInput = require('../../validation/theme');
const validateThemeItemInput = require('../../validation/theme_items');


// Requires name (String), description (String)
router.post('/',
    passport.authenticate('jwt', { session: false }),
    
    (req, res) => {        
        const { isValid, errors } = validateThemeInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }
        
        let theme = {
            name: req.body.name,
            description: req.body.description,
        };
        if(req.body.items) {
            theme.themeItems = req.body.items.split(",").map(item => {
                let themeItem = {
                    text: item
                };

                const {isValid, errors} = validateThemeItemInput(themeItem);

                if (!isValid) {
                    return res.status(401).json(errors);
                }

                return themeItem;
            });            
        }                

        if(req.body.id) {
            Theme
            .findByIdAndUpdate(req.body.id, theme, {new: true})
            .then(theme => res.json(theme));
        }
        else {
            const newTheme = new Theme(theme);
            newTheme
            .save()
            .then(theme => res.json(theme));
        }
        
    }
);


// Retrieves all playable themes and all themes.
router.get('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Theme.find()
        .then(themes => {
            if (req.query.includeAll === 'true') {
                return res.json(themes);
            }
            let validThemes = themes.reduce((validThemes, theme) =>{
                if (theme.themeItems.length >= 9) {
                    validThemes.push(theme);
                }
                return validThemes;
            },
            []);
            return res.json(validThemes);
        });

    }
);


// Requires text (String), theme_id (Schema.Type.ObjectID, ref: "Theme")
router.post('/item',
    passport.authenticate('jwt', { session: false }),
     (req, res) => {
         Theme.findById(req.params.id)
            .then(theme => {
                return res.json(theme);
            });
    }

);


module.exports = router;