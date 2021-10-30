const router = require('express').Router();
const { addCar } = require('../controllers');

const {
  authUser,
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
  addReviewToCar,
  getHomeReview,
  getCarDetails,
  addRentalController,
  getCars,
} = require('../controllers');

router.get('/auth/user', isAuth, authUser);
router.get('/cars', getCars);

router.post('/signup', signUp);

router.get('/review/:carId', getReviewes);

router.get('/cars/:carId', getCarDetails);

router.get('/type', getTypeControllers);

router.post('/login', login);
router.post('/admin/cars', isAuth, isAdmin, addCar);
router.post('/brand', isAuth, isAdmin, postBrand);
router.post('/type', isAuth, isAdmin, postType);
router.post('/rentals/:carId', isAuth, addRentalController);

router.get('/admin/users', isAuth, isAdmin, getAdminUsersControllers);
router.get('/reviewHome', getHomeReview);
router.get('/brands', getBrands);
router.get('/logout', logout);
router.delete('/admin/deleteCar/carId', isAuth, isAdmin, deleteCar);
router.post('/reviews/:rentalsId', isAuth, addReviewToCar);

router.delete('/admin/car/:carId', isAuth, isAdmin, deleteCar);
router.use(clientError);
router.use(serverError);

module.exports = router;
