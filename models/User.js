const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true},
    password: { type: String, required: true},
    date: { type: Date, default: Date.now },
    games: [{ type: Schema.Types.ObjectId, ref: 'Game'}]
  })

module.exports = User = mongoose.model('users', UserSchema);
