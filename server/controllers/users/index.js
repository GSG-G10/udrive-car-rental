const { login } = require('./login');
const { postAdminCarsControllers } = require('./postAdminCarsControllers');

const { authUser } = require('./authUser');
const { logout } = require('./logout');
const { signUp } = require('./signup');

module.exports = {
  login,
  signUp,
  authUser,
  logout,
  postAdminCarsControllers,
};
