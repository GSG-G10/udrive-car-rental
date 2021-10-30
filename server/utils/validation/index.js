const { loginValidation } = require('./loginValidtion');
const { signUpValidation } = require('./signUpValidation');
const { brandValiadtion } = require('./brandValiadtion');
const { typeValidation } = require('./typeValidation');
const { commentAndRateValidation } = require('./commentAndRateValidation');
const { addCarValidation } = require('./addCarValidation');

module.exports = {
  loginValidation,
  signUpValidation,
  brandValiadtion,
  typeValidation,
  commentAndRateValidation,
  addCarValidation,
};
