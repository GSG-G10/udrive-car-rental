const router = require('express').Router();
const { login, signUp } = require('../controllers/index');
const { getTypeControllers } = require('../controllers/cars');

router.get('/type', getTypeControllers);
router.post('/signup', signUp);
router.post('/login', login);

module.exports = router;
