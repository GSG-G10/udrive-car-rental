const { getReview } = require('./getReview');
const getCarDetailsQuery = require('./getCarDetailsQuery');
const checkEmail = require('./checkEmail');
const { getTypeQueries } = require('./getTypeQueries');

module.exports = {
  checkEmail, getTypeQueries, getReview, getCarDetailsQuery,
};
