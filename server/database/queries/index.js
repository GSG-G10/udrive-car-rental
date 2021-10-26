const { postAdminCarsQueries } = require('./postAdminCarsQueries');
const { getTypeQueries } = require('./getTypeQueries');
const { getReview } = require('./getReview');

const checkEmail = require('./checkEmail');

module.exports = {
  checkEmail,
  getTypeQueries,
  getReview,
  postAdminCarsQueries,
};
