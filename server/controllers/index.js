const { getReviewes } = require('./review/index');

const { serverError, clientError } = require('./errors');
const { login, getAdminUsersControllers } = require('./users');
const { getTypeControllers } = require('./cars');
const { isAuth, isAdmin } = require('./middleware');

module.exports = {
  login,
  serverError,
  clientError,
  getTypeControllers,
  getReviewes,
  isAuth,
  isAdmin,
  getAdminUsersControllers,
};
