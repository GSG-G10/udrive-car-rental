const { getReviewes } = require('./review/index');
const { serverError, clientError } = require('./errors');
const { login, authUser } = require('./users');
const { getTypeControllers } = require('./cars');
const { isAuth, isAdmin } = require('./middleware');

module.exports = {
  login, serverError, clientError, getTypeControllers, getReviewes, isAuth, isAdmin, authUser,
};
