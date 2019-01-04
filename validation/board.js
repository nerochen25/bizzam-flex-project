const Theme = require('../models/Theme');
const Game = require('../models/Game');
const User = require('../models/User');
const Validator = require('validator');

module.exports = function validateBoardInput(data) {
    let errors = {};

    User.findById( data.user_id )
        .then (user => {
            console.log("user is:", user)

        Game.findById(data.game_id)
            .populate('boards')
            .then(game => { 
                console.log("game is:", game)
                if (game.board.userID === data.user_id){
                  errors.game = "User is already part of game"
                }

            Theme.findById(data.theme_id)
                .then(theme => {
                    console.log("theme is:", theme)
                    if (theme.themeItems.length !== 9){
                        errors.theme = "Each theme must have 9 Theme items" 
                    }
            }).catch(err => errors.theme = "No theme found")
            

        }).catch(err => errors.game = "There is no theme ID found for this game")
        
    }).catch( err => errors.user = "User Id does not exist")

    
        

    
    
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}
