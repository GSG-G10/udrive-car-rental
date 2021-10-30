const {
  login,
  signUp,
  logout,
  getAdminUsersControllers,
  authUser,
  addCar,
} = require('./users');

const { getReviewes, getHomeReview } = require('./review');
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
  addCar,
  authUser,
  getBrands,
  postBrand,
  postType,
  deleteCar,
  getHomeReview,
};
