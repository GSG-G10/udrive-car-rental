const { getReview } = require('./getReview');

const checkEmail = require('./checkEmail');
const { getTypeQueries } = require('./getTypeQueries');
const { postTypes } = require('./postTypes');

module.exports = {
  checkEmail, getTypeQueries, getReview, postTypes,
};
