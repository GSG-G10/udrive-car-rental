const joi = require('joi');

const updateCarValidation = joi.object({
  name: joi.string().required(),
  door: joi.number().allow(''),
  typesId: joi.number().allow(''),
  brandsId: joi.number().allow(''),
  releaseYear: joi.number().allow(''),
  gearbox: joi.string().allow(''),
  price: joi.number().allow(''),
  seats: joi.number().allow(''),
  imgCar: joi.any().allow(''),
  description: joi.string().allow(''),
  color: joi.string().allow(''),
  carId: joi.number().required(),
});

module.exports = { updateCarValidation };
