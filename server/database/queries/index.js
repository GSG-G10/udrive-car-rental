const { getBrandsQueries } = require('./getBrandsQueries');
const { getReview } = require('./getReview');

const checkEmail = require('./checkEmail');

const { getTypeQueries } = require('./getTypeQueries');

module.exports = {
  checkEmail, getTypeQueries, getReview, getBrandsQueries,
};
