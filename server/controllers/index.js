const { serverError, clientError } = require('./errors');
const { login } = require('./users');
const { getTypeControllers } = require('./cars');
const { isAuth, isAdmin } = require('./middleware');

module.exports = {
  login, serverError, clientError, getTypeControllers, isAuth, isAdmin,
};
