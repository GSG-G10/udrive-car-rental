const joi = require('joi');

const updateCarValidation = joi.object({
  name: joi.string().required(),
  door: joi.number().required(),
  typesId: joi.number().required(),
  brandsId: joi.number().required(),
  releaseYear: joi.number().required(),
  gearbox: joi.string().required(),
  price: joi.number().required(),
  seats: joi.number().required(),
  imgCar: joi.any().required(),
  description: joi.string().required(),
  color: joi.string().required(),
  carId: joi.number().required(),
});

module.exports = { updateCarValidation };
