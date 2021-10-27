const router = require('express').Router();
const {
  authUser,
  login,
  clientError,
  serverError,
  getTypeControllers,
  getBrands,
  getReviewes,
  postBrand,
  isAuth,
  isAdmin,
  signUp,
  logout,
  postType,
  deleteCar,
  addReviewToCar,
} = require('../controllers');

router.get('/auth/user', isAuth, authUser);

router.post('/signup', signUp);

router.get('/review/:carId', getReviewes);

router.get('/type', getTypeControllers);

router.post('/login', login);
router.post('/brand', isAuth, isAdmin, postBrand);
router.post('/type', isAuth, isAdmin, postType);

router.get('/brands', getBrands);
router.get('/logout', logout);
router.delete('/admin/deleteCar/carId', isAuth, isAdmin, deleteCar);
router.post('/rentals/history/reviews/:rentalsId', isAuth, addReviewToCar);

router.use(clientError);
router.use(serverError);

module.exports = router;
