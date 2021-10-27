const { login, signUp, logout } = require('./users');
const { getReviewes } = require('./review');
const { serverError, clientError } = require('./errors');
const { getTypeControllers, getBrands } = require('./cars');
const { isAuth, isAdmin } = require('./middleware');
const { postBrand } = require('./admin');

module.exports = {
  login,
  serverError,
  clientError,
  getTypeControllers,
  getReviewes,
  isAuth,
  isAdmin,
  getBrands,
  postBrand,
  signUp,
  logout,
};
