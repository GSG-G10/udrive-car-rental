const { getReview } = require('./getReview');
const { getTypeQueries } = require('./getTypeQueries');

const { postBrands } = require('./postBrands');
const checkEmail = require('./checkEmail');
const signUpQuery = require('./users/signUpQuery');

module.exports = {
  checkEmail, signUpQuery, getTypeQueries, getReview, postBrands,

};
