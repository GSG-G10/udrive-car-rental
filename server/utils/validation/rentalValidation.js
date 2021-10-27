const Joi = require('joi');

const rentalValidation = Joi.object({
  pick_up_date_time: Joi.string().isoDate(),
  pick_of_date_time: Joi.string().isoDate,
  total_price: Joi.number().positive(),
});

module.exports = rentalValidation;
