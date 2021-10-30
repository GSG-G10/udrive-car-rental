const { getBrandsQueries } = require('./getBrandsQueries');
const { getReview } = require('./getReview');

const { getTypeQueries } = require('./getTypeQueries');
const { postBrands } = require('./postBrands');
const deleteBrandQuery = require('./deleteBrandQuery');
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
  deleteBrandQuery,
};
