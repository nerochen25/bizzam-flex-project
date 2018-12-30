const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// const root = 'https://s3.amazonaws.com/ourbank>';
const subSquares = {
    text: String, // Generated from squares on board creation
    checked: { type: Boolean, default: false },
    position: Number,
    // getter attribute for uploading/storing proof for adventure mode
    // proof: {
    //     type: String,
    //     get: v => `${root}${v}`
    //   }
}

const subBoards = {
    userID: Number,
    squares: [ subSquares ]
}

const gameSchema = Schema({
    boards: [ subBoards ],
    themeID: { type: Schema.Types.ObjectId, ref: 'Theme' }, // belongs to Game
    winner_id: Number,
    gameType: String 

})

module.exports = Game = mongoose.model('Game', gameSchema);