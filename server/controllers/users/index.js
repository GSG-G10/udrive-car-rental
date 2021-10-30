const { login } = require('./login');
const { addCar } = require('./addCar');

const { authUser } = require('./authUser');
const { logout } = require('./logout');
const { signUp } = require('./signup');

module.exports = {
  login,
  signUp,
  authUser,
  logout,
  addCar,
};
