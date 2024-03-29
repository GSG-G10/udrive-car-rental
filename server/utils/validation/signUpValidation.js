const joi = require('joi');

const signUpValidation = joi.object({
  email: joi.string().email().required(),
  password: joi.string().alphanum().min(8).required(),
  phone: joi.string().required(),
  confirmedPassword: joi.ref('password'),
  name: joi.string().required(),
});

module.exports = { signUpValidation };
