const Game = require('../models/Game')

module.exports = function validateBoardInput(data) {
    let errors = {};

    Game.findById(req.body.game_id)
        .then(game => {
            game.boards.forEach(board => {
                if (board.userID === req.body.user_id) {
                    errors.user_id = 'User already has board in this game';
                }
            });

        })
        .catch(err => errors.game_id = 'Game cannot be retrieved');


    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}