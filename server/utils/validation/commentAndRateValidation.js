const joi = require('joi');

const commentAndRateValidation = joi.object({
  rentalsId: joi.number().required(),
  comment: joi.string().allow(''),
  rate: joi.number().required(),
});

module.exports = { commentAndRateValidation };
