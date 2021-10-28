const { getBrandsQueries } = require('./getBrandsQueries');
const { getReview } = require('./getReview');

const { getTypeQueries } = require('./getTypeQueries');
const { postBrands } = require('./postBrands');
const checkEmail = require('./checkEmail');
const { postTypes } = require('./postTypes');
const signUpQuery = require('./users/signUpQuery');
const { getCarsQuery } = require('./cars/getCarsQuery');

module.exports = {
  checkEmail,
  signUpQuery,
  getTypeQueries,
  getReview,
  postBrands,
  postTypes,
  getBrandsQueries,
  getCarsQuery,
};
