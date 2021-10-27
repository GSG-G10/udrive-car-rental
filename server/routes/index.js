const router = require('express').Router();
const { getReviewes } = require('../controllers/index');
const {
  login, clientError, serverError, getTypeControllers, getCarDetailsController,
} = require('../controllers');

router.post('/login', login);

router.get('/review/:carId', getReviewes);

router.get('/cars/:id', getCarDetailsController);

router.get('/type', getTypeControllers);

router.post('/login', login);

router.get(clientError);
router.get(serverError);

module.exports = router;
