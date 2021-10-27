const router = require('express').Router();
const { postAdminCarsControllers } = require('../controllers');

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
} = require('../controllers');

router.get('/auth/user', isAuth, authUser);

router.post('/signup', signUp);

router.get('/review/:carId', getReviewes);

router.get('/type', getTypeControllers);

router.post('/login', login);
router.post('/admin/cars', isAuth, isAdmin, postAdminCarsControllers);
router.post('/brand', isAuth, isAdmin, postBrand);
router.post('/type', isAuth, isAdmin, postType);

router.get('/brands', getBrands);
router.get('/logout', logout);

router.use(clientError);
router.use(serverError);

module.exports = router;
