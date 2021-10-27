const { login } = require('./login');
const { getAdminUsersControllers } = require('./getAdminUsersControllers');

const { logout } = require('./logout');
const { signUp } = require('./signup');

const { authUser } = require('./authUser');

module.exports = {
  login,
  signUp,
  authUser,
  logout,
  getAdminUsersControllers,
};
