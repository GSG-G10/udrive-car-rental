const {
  login,
  signUp,
  authUser,
  logout,
  addCar,
} = require('./users');
const { getReviewes, getHomeReview } = require('./review');
const { serverError, clientError } = require('./errors');
const {
  getTypeControllers,
  getBrands,
  deleteTypeControllers,
} = require('./cars');

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
  addCar,
  authUser,
  getBrands,
  postBrand,
  signUp,
  logout,
  postType,
  deleteCar,
  deleteTypeControllers,
  getHomeReview,
};
