const { login } = require('./login');
const { authUser } = require('./authUser');
const { logout } = require('./logout');
const { signUp } = require('./signup');

module.exports = {
  login, signUp, authUser, logout,
};
