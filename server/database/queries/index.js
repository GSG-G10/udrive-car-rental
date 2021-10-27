const { getBrandsQueries } = require('./getBrandsQueries');
const { getReview } = require('./getReview');

const { getTypeQueries } = require('./getTypeQueries');
const { getAdminUsers } = require('./getAdminUsers');
const { postBrands } = require('./postBrands');
const checkEmail = require('./checkEmail');
const { postTypes } = require('./postTypes');
const signUpQuery = require('./users/signUpQuery');

module.exports = {
  getAdminUsers,
  checkEmail,
  signUpQuery,
  getTypeQueries,
  getReview,
  postBrands,
  postTypes,
  getBrandsQueries,
};
