const router = require('express').Router();

const {
  authUser,
  addCar,
  login,
  clientError,
  serverError,
  getTypeControllers,
  getAdminUsersControllers,
  getReviewes,
  getBrands,
  postBrand,
  isAuth,
  isAdmin,
  signUp,
  logout,
  postType,
  deleteCar,
  updateCarControllers,
  deleteTypeControllers,
  addReviewToCar,
  getCarAdminByName,
  getHomeReview,
  getCarDetails,
  addRentalController,
  getCars,
  pendingRentals,
  historyRentals,
  deleteRental,
  deleteBrand,
} = require('../controllers');

// auth routes
router.post('/login', login);
router.post('/signup', signUp);
router.post('/logout', logout);

// cars
router.get('/cars', getCars);
router.get('/cars/:carId', getCarDetails);

router.get('/types', getTypeControllers);

router.get('/brands', getBrands);

router.get('/reviewHome', getHomeReview);
router.get('/reviews/:carId', getReviewes);

// ****** protected routes ******

router.use(isAuth);

router.get('/auth/user', authUser);

router.get('/rentals', pendingRentals);
router.get('/rentals/history', historyRentals);
router.post('/rentals/:carId', addRentalController);
router.delete('/rentals/:rentalId', deleteRental);

router.post('/reviews/:rentalsId', addReviewToCar);

// admin routes
router.use(isAdmin);

router.get('/admin/users', getAdminUsersControllers);

router.get('/admin/cars', getCarAdminByName);
router.post('/admin/cars', addCar);
router.put('/admin/cars/:carId', updateCarControllers);
router.delete('/admin/cars/:carId', deleteCar);

router.post('/admin/brands', postBrand);
router.delete('/admin/brands/:brandId', deleteBrand);

router.post('/admin/types', postType);
router.delete('/admin/types/:typeId', deleteTypeControllers);

router.use(clientError);
router.use(serverError);

module.exports = router;
