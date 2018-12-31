const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subThemeItem = {
    text: String
}

const themeSchema = Schema({
    name: String,
    description: String,
    themeItems: [ subThemeItem ]
})
// has many games, no refrence stored in this model


module.exports = Theme = mongoose.model('Theme', themeSchema)