const { login, signUp, logout } = require('./users');
const { getReviewes } = require('./review');
const { serverError, clientError } = require('./errors');
const { getTypeControllers } = require('./cars');
const { isAuth, isAdmin } = require('./middleware');
const { postBrand, postType } = require('./admin');

module.exports = {
  login,
  serverError,
  clientError,
  getTypeControllers,
  getReviewes,
  isAuth,
  isAdmin,
  postBrand,
  signUp,
  logout,
  postType,
};
