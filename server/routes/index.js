const router = require('express').Router();
const { getReviewes } = require('../controllers/index');
const {
  login, clientError, serverError, getTypeControllers, postType, isAuth, isAdmin,
} = require('../controllers');

router.post('/login', login);

router.get('/review/:carId', getReviewes);

router.get('/type', getTypeControllers);

router.post('/login', login);
router.post('/type', isAuth, isAdmin, postType);
router.get(clientError);
router.get(serverError);

module.exports = router;
