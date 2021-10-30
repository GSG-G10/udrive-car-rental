const { postAdminCarsQueries } = require('./postAdminCarsQueries');
const { getTypeQueries } = require('./getTypeQueries');
const { getReview } = require('./getReview');
const getCarDetailsQuery = require('./getCarDetailsQuery');
const { getBrandsQueries } = require('./getBrandsQueries');

const { postReviewsRentalsId } = require('./postReviewsRentalsId');
const { getAdminUsers } = require('./getAdminUsers');
const { postBrands } = require('./postBrands');
const checkEmail = require('./checkEmail');
const { getCarByName } = require('./getCarByName');
const { postTypes } = require('./postTypes');
const { deleteTypes } = require('./deleteTypes');
const signUpQuery = require('./users/signUpQuery');
const { pendingRentalsQuery, historyRentalsQuery } = require('./rentals');

const { getCarsQuery } = require('./cars/getCarsQuery');

const { addRentalQuery, checkDateTimeQuery } = require('./rentals');

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
  deleteTypes,
  pendingRentalsQuery,
  historyRentalsQuery,
  getCarsQuery,
  postReviewsRentalsId,
  addRentalQuery,
  checkDateTimeQuery,
  getCarDetailsQuery,
  getCarByName,
  postAdminCarsQueries,
  getHomeReviews,
  deleteCars,
};
