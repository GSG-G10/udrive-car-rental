const Joi = require('joi');

const rentalValidation = Joi.object({
  location: Joi.string(),
  pickUpDateTime: Joi.string().isoDate(),
  pickOffDateTime: Joi.string().isoDate(),
});

module.exports = rentalValidation;
