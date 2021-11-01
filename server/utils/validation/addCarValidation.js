const joi = require('joi');

const addCarValidation = joi.object({
  name: joi.string().required(),
  door: joi.number().allow(''),
  typeId: joi.number().allow(''),
  brandId: joi.number().allow(''),
  releaseYear: joi.number().allow(''),
  gearbox: joi.string().allow(''),
  price: joi.number().allow(''),
  seats: joi.number().allow(''),
  imgCar: joi.any().allow(''),
  description: joi.string().allow(''),
  color: joi.string().allow(''),
});

module.exports = { addCarValidation };
