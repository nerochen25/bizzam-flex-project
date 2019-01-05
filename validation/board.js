const Theme = require('../models/Theme');
const Game = require('../models/Game');
const User = require('../models/User');


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
            
            // checks if user already has board
            game.boards.forEach(async function (board) {
                if (board.userID === user.id) {
                    errors.user = "User already has a board in this game"
                }
            })
            // checks if theme is has enough items
            if (theme.themeItems.length < 9){
                errors.theme = "Theme must have at least 9 items to create a board" 
            }
            
            resolve({
                isValid: Object.keys(errors).length === 0, 
                errors
            })
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
