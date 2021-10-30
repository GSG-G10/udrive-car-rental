const { postAdminCarsQueries } = require('./postAdminCarsQueries');
const { getTypeQueries } = require('./getTypeQueries');
const { getReview } = require('./getReview');
const getCarDetailsQuery = require('./getCarDetailsQuery');
const { getBrandsQueries } = require('./getBrandsQueries');

const { postReviewsRentalsId } = require('./postReviewsRentalsId');
const { getAdminUsers } = require('./getAdminUsers');
const { postBrands } = require('./postBrands');
const checkEmail = require('./checkEmail');
const { postTypes } = require('./postTypes');
const signUpQuery = require('./users/signUpQuery');
const { getHomeReviews } = require('./getHomeReviews');
const { deleteCars } = require('./deleteCars');

module.exports = {
  getAdminUsers,
  checkEmail,
  signUpQuery,
  getTypeQueries,
  getReview,
  postBrands,
  postTypes,
  getBrandsQueries,
  postReviewsRentalsId,
  getCarDetailsQuery,
  postAdminCarsQueries,
  getHomeReviews,
  deleteCars,
};
