const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const gameSchema = Schema({
    boards: [{ type: Schema.Types.ObjectId, ref: 'Board' }],
    theme: String, // belongs to Theme
    winner_id: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    gameType: String,
    creator_id: String,
    pin: Number

})

module.exports = Game = mongoose.model('Game', gameSchema);