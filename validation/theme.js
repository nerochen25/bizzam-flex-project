const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateThemeInput(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : '';
    data.description = validText(data.description) ? data.description : '';

    if (!Validator.isLength(data.name, { min: 1, max: 25 })) {
        errors.name = 'Name must be between 1 and 25 characters';
    }
    if (!Validator.isLength(data.description, { max: 125 })) {
        errors.description = 'Description cannot exceed 125 characters';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Theme must have a name';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};