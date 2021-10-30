const { isAuth, isAdmin } = require('./middleware');
const { serverError, clientError } = require('./errors');

const {
  login,
  signUp,
  authUser,
  logout,
  addCar,
  getAdminUsersControllers,
} = require('./users');

const {
  getReviewes,
  getHomeReview, addReviewToCar,
} = require('./review');

const {
  getTypeControllers,
  getBrands,
  updateCarControllers,
  deleteTypeControllers,
  getCars,
  getCarDetails,
  getCarAdminByName,
} = require('./cars');

const {
  postBrand, postType, deleteCar, deleteBrand,
} = require('./admin');

const {
  pendingRentals, historyRentals, deleteRental, addRentalController,
} = require('./rentals');

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
  deleteBrand,
  updateCarControllers,
  deleteRental,
  deleteTypeControllers,
  pendingRentals,
  historyRentals,
  getCars,
  addReviewToCar,
  getCarAdminByName,
  getHomeReview,
};
