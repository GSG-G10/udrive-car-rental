const { postAdminCarsQueries } = require('./postAdminCarsQueries');
const { getTypeQueries } = require('./getTypeQueries');
const { getReview } = require('./getReview');
const checkEmail = require('./checkEmail');
const signUpQuery = require('./users/signUpQuery');

module.exports = {
  checkEmail,
  signUpQuery,
  getTypeQueries,
  getReview,
  postAdminCarsQueries,
};
