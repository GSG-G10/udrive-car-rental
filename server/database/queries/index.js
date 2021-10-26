const { getReview } = require('./getReview');

const checkEmail = require('./checkEmail');
const { getTypeQueries } = require('./getTypeQueries');
const { postBrands } = require('./postBrands');

module.exports = {
  checkEmail, getTypeQueries, getReview, postBrands,
};
