const joi = require('joi');

const signUpValidation = joi.object({
  email: joi.string().email().required(),
  password: joi.string().alphanum().min(8).required(),
  confirm_password: joi.ref('password'),
  phone: joi.string().required(),
  name: joi.string().required(),
});

module.exports = { signUpValidation };
