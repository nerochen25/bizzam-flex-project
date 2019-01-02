const Game = require()
const User = require('../models/User');
const Validator = require('validator');

module.exports = function validateBoardInput(data) {
    let errors = {};

    User.findById( data.user_id )
    
        .catch( err => errors.user = "User Id does not exist");



    Game.findById( data.theme_id )
        .populate( 'boards' )
        .exec( function (err, game ) { 
            if (game.board.userID === user_id){
                errors.game = "User is already part of game"
            }
          });
        }
        .catch(err => errors.theme = "There is no theme ID found")


    Theme.findById( data.theme_id)
        .then(theme => {
            if (theme.themeItems.length !== 9) {
               errors.theme = "Each theme must have 9 Theme items" 
            }

        })

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}
