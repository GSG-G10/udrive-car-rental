const router = require('express').Router();
const { getReviewes } = require('../controllers/index');
const {
  login, clientError, serverError, getTypeControllers,
} = require('../controllers');

router.post('/login', login);

router.get('/review/:carId', getReviewes);

router.get('/type', getTypeControllers);

router.post('/login', login);

const { getBrands } = require('../controllers/cars');

router.get('/brands', getBrands);
router.get(clientError);
router.get(serverError);

module.exports = router;
