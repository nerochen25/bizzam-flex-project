const Game = require('../models/Game');
const User = require('../models/User');
const Validator = require('validator');

module.exports = function validateBoardInput(data) {
    let errors = {};

    User.findById( data.user_id )
        .then (user => {
        
        })
        .catch( err => errors.user = "User Id does not exist")
        

    Game.findById( data.theme_id )

        .populate( 'boards' )
        .then(game => { 
         if (game.board.userID === data.user_id){
              errors.game = "User is already part of game"
            }
           }
          )    
        .catch(err => errors.theme = "There is no theme ID found")
        

    Theme.findById( data.theme_id)
        .then(theme => {
            if (theme.themeItems.length !== 9) {
               errors.theme = "Each theme must have 9 Theme items" 
            }

        }).catch(err => errors.theme = "No theme found")

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}
