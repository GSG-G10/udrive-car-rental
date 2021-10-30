const { postAdminCarsQueries } = require('./postAdminCarsQueries');
const { getTypeQueries } = require('./getTypeQueries');
const { getReview } = require('./getReview');
const { getBrandsQueries } = require('./getBrandsQueries');

const { postBrands } = require('./postBrands');
const checkEmail = require('./checkEmail');
const { getCarByName } = require('./getCarByName');
const { postTypes } = require('./postTypes');
const signUpQuery = require('./users/signUpQuery');
const { getHomeReviews } = require('./getHomeReviews');
const { deleteCars } = require('./deleteCars');

module.exports = {
  checkEmail,
  signUpQuery,
  getTypeQueries,
  getReview,
  postBrands,
  postTypes,
  getBrandsQueries,
  getCarByName,
  postAdminCarsQueries,
  getHomeReviews,
  deleteCars,
};
