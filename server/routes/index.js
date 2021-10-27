const router = require('express').Router();
const {
  login, clientError, serverError, getTypeControllers, getReviewes, isAuth, authUser, signUp,
} = require('../controllers');

router.get('/auth/user', isAuth, authUser);

router.post('/signup', signUp);

router.get('/review/:carId', getReviewes);

router.get('/type', getTypeControllers);

router.post('/login', login);

router.use(clientError);
router.use(serverError);

module.exports = router;
