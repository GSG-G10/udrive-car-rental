const { getReviewes } = require('./review/index');

const { serverError, clientError } = require('./errors');
const { login } = require('./users');
const { getTypeControllers, getCarDetails } = require('./cars');
const { isAuth, isAdmin } = require('./middleware');

module.exports = {
  login,
  serverError,
  clientError,
  getTypeControllers,
  getReviewes,
  isAuth,
  isAdmin,
  getCarDetails,
};
