const joi = require('joi');

const typeValidation = joi.object({
  name: joi.string().required(),
  image: joi.any().required(),
});

module.exports = { typeValidation };
