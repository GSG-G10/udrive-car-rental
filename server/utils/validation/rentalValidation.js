const Joi = require('joi');

const rentalValidation = Joi.object({
  pickUpDateTime: Joi.string().isoDate(),
  pickOffDateTime: Joi.string().isoDate,
  totalPrice: Joi.number().positive(),
});

module.exports = rentalValidation;
