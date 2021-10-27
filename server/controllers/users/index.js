const { login } = require('./login');
const { postAdminCarsControllers } = require('./postAdminCarsControllers');

const logout = require('./logout');
const signUp = require('./signup');

module.exports = {
  login, signUp, logout, postAdminCarsControllers,
};
