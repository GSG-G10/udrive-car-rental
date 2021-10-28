const router = require('express').Router();
const { getReviewes } = require('../controllers/index');
const {
  login, clientError, serverError, getTypeControllers, getCarDetails,
} = require('../controllers');

router.post('/login', login);

router.get('/review/:carId', getReviewes);

router.get('/cars/:id', getCarDetails);

router.get('/type', getTypeControllers);

router.post('/login', login);

router.use(clientError);
router.use(serverError);

module.exports = router;
