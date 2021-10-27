const router = require('express').Router();

const {
  login,
  clientError,
  serverError,
  getTypeControllers,
  getBrands,
  getReviewes,
  signUp,
  logout,
} = require('../controllers');

router.post('/login', login);
router.post('/signup', signUp);

router.get('/review/:carId', getReviewes);

router.get('/type', getTypeControllers);

router.post('/login', login);

router.get('/brands', getBrands);
router.get('/logout', logout);

router.get(clientError);
router.get(serverError);

module.exports = router;
