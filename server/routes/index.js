const router = require('express').Router();
const { addCar } = require('../controllers');

const {
  authUser,
  login,
  clientError,
  serverError,
  getTypeControllers,
  getReviewes,
  getBrands,
  postBrand,
  isAuth,
  isAdmin,
  signUp,
  logout,
  postType,
  deleteCar,
  deleteTypeControllers,
  getHomeReview,
} = require('../controllers');

router.get('/auth/user', isAuth, authUser);

router.post('/signup', signUp);

router.get('/review/:carId', getReviewes);

router.get('/type', getTypeControllers);

router.post('/login', login);
router.post('/admin/cars', isAuth, isAdmin, addCar);
router.post('/brand', isAuth, isAdmin, postBrand);
router.post('/type', isAuth, isAdmin, postType);
router.get('/reviewHome', getHomeReview);
router.get('/brands', getBrands);
router.get('/logout', logout);
router.delete('/admin/deleteCar/carId', isAuth, isAdmin, deleteCar);
router.delete('/admin/deleteType/:typeId', isAuth, isAdmin, deleteTypeControllers);
router.delete('/admin/car/:carId', isAuth, isAdmin, deleteCar);
router.use(clientError);
router.use(serverError);

module.exports = router;
