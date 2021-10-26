const { getReview } = require('./getReview');
const { getTypeQueries } = require('./getTypeQueries');
const checkEmail = require('./checkEmail');
const signUpQuery = require('./users/signUpQuery');

module.exports = {
  checkEmail, signUpQuery, getTypeQueries, getReview,
};
