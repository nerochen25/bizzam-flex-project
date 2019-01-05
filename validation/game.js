const Validator = require('validator');
const validText = require('./valid-text');
// const currentUser = require('../models/User.js')


module.exports = function validateGameInput(data) {
    let errors = {};

    data.gameType = validText(data.gameType) ? data.gameType : '';

    // returns true if the userID of one of the boards === currentuser._id
    
    // const userIncluded = data.boards.some (function (board){
    //     return board.userID.equals(currentUser._id)
    // })

    // if (userIncluded) {
    //     errors.boards = 'current user already has a board'
    // }

    if (Validator.isEmpty(data.theme)) {
        errors.theme = 'theme cannot be blank'
    }
    console.log(data.gameType)
    console.log(data.gameType === 'Classic')
    if (!( Validator.equals('Classic', data.gameType) || Validator.equals('Adventure', data.gameType) )) {
        errors.gameType = 'gameType Error, must be Classic or Adventure'
    }

    if (Validator.isEmpty(data.gameType)) {
        errors.gameType = 'gameType must have a name'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}


