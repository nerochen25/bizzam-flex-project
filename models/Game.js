const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const gameSchema = Schema({
    boards: [{ type: Schema.Types.ObjectId, ref: 'Game' }],
    theme: { type: Schema.Types.ObjectId, ref: 'Theme' }, // belongs to Theme
    winner_id: Number,
    gameType: String 

})

module.exports = Game = mongoose.model('Game', gameSchema);