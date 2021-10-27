const joi = require('joi');

const brandValiadtion = joi.object({
  name: joi.string().required(),
  image: joi.any().required(),
});

module.exports = { brandValiadtion };
