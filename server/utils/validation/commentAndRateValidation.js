const joi = require('joi');

const commentAndRateValidation = joi.object({
  rentalsId: joi.number().required(),
  comment: joi.string().required(),
  rate: joi.number().required(),
});

module.exports = { commentAndRateValidation };
