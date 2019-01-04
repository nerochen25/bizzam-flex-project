const Theme = require('../models/Theme');
const Game = require('../models/Game');
const User = require('../models/User');
const Validator = require('validator');

module.exports = function validateBoardInput(data) {
    let errors = {};

    return new Promise(async (resolve, reject) => {

        let user
        let game
        let theme
        try{
            user = await User.findById( data.user_id )
            game = await Game.findById(data.game_id).populate('boards')
            theme = await Theme.findById(data.theme_id)
                console.log(theme)
                if (theme.themeItems.length < 9){
                    resolve ({ isValid: false, errors: {theme: "Each theme must have at least 9 Theme items"}}) 
                }
            resolve({isValid:true, errors})
        } catch(err) {
            if (!user) {
                resolve({ isValid: false, errors: {user: 'user not found'}})
            } else if (!game) {
                resolve({ isValid: false, errors: {game: 'game not found'}})
            } else if (!theme) {
                resolve({ isValid: false, errors: {theme: 'theme not found'}})
            }
            
        }
    })

}
