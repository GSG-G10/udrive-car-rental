const { login, signUp, logout } = require('./users');
const { getReviewes } = require('./review');
const { serverError, clientError } = require('./errors');
const { getTypeControllers } = require('./cars');
const { isAuth, isAdmin } = require('./middleware');
const { postBrand } = require('./admin/indx');

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
};
