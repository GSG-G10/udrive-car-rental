const { serverError, clientError } = require('./errors');
const { login } = require('./users');
const { getTypeControllers } = require('./cars');

module.exports = {
  login, serverError, clientError, getTypeControllers,
};
