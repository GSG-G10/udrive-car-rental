const { postAdminCarsQueries } = require('./postAdminCarsQueries');
const { getTypeQueries } = require('./getTypeQueries');
const { getReview } = require('./getReview');
const { getBrandsQueries } = require('./getBrandsQueries');

const { postBrands } = require('./postBrands');
const checkEmail = require('./checkEmail');
const { postTypes } = require('./postTypes');
const signUpQuery = require('./users/signUpQuery');

module.exports = {
  checkEmail,
  signUpQuery,
  getTypeQueries,
  getReview,
  postAdminCarsQueries,
  postBrands,
  postTypes,
  getBrandsQueries,
};
