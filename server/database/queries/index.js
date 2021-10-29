const { getBrandsQueries } = require('./getBrandsQueries');
const { getReview } = require('./getReview');
const getCarDetailsQuery = require('./getCarDetailsQuery');
const { getTypeQueries } = require('./getTypeQueries');
const { postBrands } = require('./postBrands');
const checkEmail = require('./checkEmail');
const { postTypes } = require('./postTypes');
const signUpQuery = require('./users/signUpQuery');

module.exports = {
  checkEmail,
  signUpQuery,
  getTypeQueries,
  getReview,
  postBrands,
  postTypes,
  getBrandsQueries,
  getCarDetailsQuery,
};
