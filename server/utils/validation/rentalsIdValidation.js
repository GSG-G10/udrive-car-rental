const joi = require('joi');

const rentalsIdValidation = joi.object({
  rentalsId: joi.number().required(),
});

module.exports = { rentalsIdValidation };
