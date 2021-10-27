const { login } = require('./login');
const { getAdminUsersControllers } = require('./getAdminUsersControllers');

const logout = require('./logout');
const signUp = require('./signup');

module.exports = {
  login, signUp, logout, getAdminUsersControllers,
};
