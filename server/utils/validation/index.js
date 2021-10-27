const { loginValidation } = require('./loginValidtion');
const { signUpValidation } = require('./signUpValidation');
const { brandValiadtion } = require('./brandValiadtion');
const { typeValidation } = require('./typeValidation');
const { commentAndRateValidation } = require('./commentAndRateValidation');
const { rentalsIdValidation } = require('./rentalsIdValidation');

module.exports = {
  loginValidation,
  signUpValidation,
  brandValiadtion,
  typeValidation,
  commentAndRateValidation,
  rentalsIdValidation,
};
