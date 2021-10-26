const router = require('express').Router();
const { postAdminCarsControllers } = require('../controllers');
const { getReviewes } = require('../controllers/index');
const {
  login,
  clientError,
  serverError,
  getTypeControllers,
  isAdmin,
  isAuth,
} = require('../controllers');

router.post('/login', login);

router.get('/review/:carId', getReviewes);

router.get('/type', getTypeControllers);

router.post('/login', login);
router.post('/admin/cars', isAuth, isAdmin, postAdminCarsControllers);

router.get(clientError);
router.get(serverError);

module.exports = router;
