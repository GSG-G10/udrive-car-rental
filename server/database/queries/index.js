const { getBrandsQueries } = require('./getBrandsQueries');
const { getReview } = require('./getReview');

const { getTypeQueries } = require('./getTypeQueries');

const { postBrands } = require('./postBrands');
const checkEmail = require('./checkEmail');
const signUpQuery = require('./users/signUpQuery');

module.exports = {
  getBrandsQueries,
  checkEmail,
  signUpQuery,
  getTypeQueries,
  getReview,
  postBrands,

};
