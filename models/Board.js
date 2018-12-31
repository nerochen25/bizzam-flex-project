const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// const root = 'https://s3.amazonaws.com/ourbank>';
const subSquares = {
    text: String, // Generated from squares on board creation
    checked: { type: Boolean, default: false },
    position: Number,
    game: { type: Schema.Types.ObjectId, ref: 'Game' }

    // getter attribute for uploading/storing proof for adventure mode
    // proof: {
    //     type: String,
    //     get: v => `${root}${v}`
    //   }
}

const boardSchema = Schema({
    userID: Number,
    squares: [ subSquares ]
})


module.exports = Board = mongoose.model('Board', boardSchema)