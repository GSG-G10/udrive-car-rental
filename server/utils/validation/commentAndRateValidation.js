const joi = require('joi');

const commentAndRateValidation = joi.object({
  comment: joi.string().required(),
  rate: joi.number().required(),
});

module.exports = { commentAndRateValidation };
