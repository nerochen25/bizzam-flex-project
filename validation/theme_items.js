const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateThemeItemInput(data) {
    let errors = {};

    data.text = validText(data.text) ? data.text : '';
    
    if (!Validator.isLength(data.text, { max: 120 })) {
        errors.text = 'Theme Text must be under 120 charachters'
    }

    if (Validator.isEmpty(data.text)) {
        errors.text = 'ThemeItem must have text'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}