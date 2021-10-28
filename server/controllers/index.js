const {
  login, signUp, authUser, logout,
} = require('./users');
const { getReviewes } = require('./review');
const { serverError, clientError } = require('./errors');
const { getTypeControllers, getBrands } = require('./cars');
const { isAuth, isAdmin } = require('./middleware');
const { postBrand, postType, deleteCar } = require('./admin');
const { pendingRentals, historyRentals } = require('./rentals');

module.exports = {
  login,
  serverError,
  clientError,
  getTypeControllers,
  getReviewes,
  isAuth,
  isAdmin,
  authUser,
  getBrands,
  postBrand,
  signUp,
  logout,
  postType,
  deleteCar,
  pendingRentals,
  historyRentals,
};
