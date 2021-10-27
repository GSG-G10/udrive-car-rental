const {
  login,
  signUp,
  logout,
  getAdminUsersControllers,
  authUser,
} = require('./users');

const { getReviewes } = require('./review');
const { serverError, clientError } = require('./errors');
const { getTypeControllers, getBrands } = require('./cars');
const { isAuth, isAdmin } = require('./middleware');
const { postBrand, postType, deleteCar } = require('./admin');

module.exports = {
  login,
  serverError,
  clientError,
  getTypeControllers,
  getReviewes,
  isAuth,
  isAdmin,
  getAdminUsersControllers,
  signUp,
  logout,
  authUser,
  getBrands,
  postBrand,
  postType,
  deleteCar,
};
