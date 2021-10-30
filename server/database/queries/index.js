const { postAdminCarsQueries } = require('./postAdminCarsQueries');
const { getTypeQueries } = require('./getTypeQueries');
const { getReview } = require('./getReview');
const { getBrandsQueries } = require('./getBrandsQueries');

const { postReviewsRentalsId } = require('./postReviewsRentalsId');
const { postBrands } = require('./postBrands');
const checkEmail = require('./checkEmail');
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
  postReviewsRentalsId,
  postAdminCarsQueries,
  getHomeReviews,
  deleteCars,
};
