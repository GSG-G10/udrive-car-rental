const joi = require('joi');

const addCarValidation = joi.object({
  name: joi.string().required(),
  door: joi.number().required(),
  typeId: joi.number().required(),
  brandId: joi.number().required(),
  releaseYear: joi.number().required(),
  gearbox: joi.string().required(),
  price: joi.number().required(),
  seats: joi.number().required(),
  imgCar: joi.any().required(),
  description: joi.string().required(),
  color: joi.string().required(),
});

module.exports = { addCarValidation };
