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
const {
  getTypeControllers,
  getBrands,
  deleteTypeControllers,
  getCars,
  getCarDetails,
  getCarAdminByName,
} = require('./cars');

const { isAuth, isAdmin } = require('./middleware');

const { addRentalController } = require('./rentals');
const { postBrand, postType, deleteCar } = require('./admin');
const { pendingRentals, historyRentals, deleteRental } = require('./rentals');

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
  addRentalController,
  deleteCar,
  deleteRental,
  deleteTypeControllers,
  pendingRentals,
  historyRentals,
  getCars,
  addReviewToCar,
  getCarAdminByName,
  getHomeReview,
};
