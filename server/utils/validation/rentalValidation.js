const Joi = require('joi');

const rentalValidation = Joi.object({
  carId: Joi.number().integer(),
  userId: Joi.number().integer(),
  pickUpDateTime: Joi.string().isoDate(),
  pickOffDateTime: Joi.string().isoDate,
});

module.exports = rentalValidation;
