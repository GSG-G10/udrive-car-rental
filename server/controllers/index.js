const { login, signUp, logout } = require('./users');
const { getReviewes } = require('./review/index');
const { serverError, clientError } = require('./errors');
const { getTypeControllers } = require('./cars');
const { isAuth, isAdmin } = require('./middleware');

module.exports = {
  login, serverError, clientError, getTypeControllers, getReviewes, isAuth, isAdmin, signUp, logout,
};
