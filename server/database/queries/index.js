const { getReview } = require('./getReview');

const checkEmail = require('./checkEmail');
const { getTypeQueries } = require('./getTypeQueries');
const { getAdminUsers } = require('./getAdminUsers');

module.exports = {
  checkEmail, getTypeQueries, getReview, getAdminUsers,
};
