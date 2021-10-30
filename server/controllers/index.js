const {
  login,
  signUp,
  authUser,
  logout,
  addCar,
  getAdminUsersControllers,
} = require('./users');
const { getReviewes, getHomeReview, addReviewToCar } = require('./review');

const { serverError, clientError } = require('./errors');

const { getTypeControllers, getBrands, getCarDetails } = require('./cars');
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
  getCarDetails,
  getAdminUsersControllers,
  signUp,
  logout,
  addCar,
  authUser,
  getBrands,
  postBrand,
  postType,
  deleteCar,
  addReviewToCar,
  getHomeReview,
};
