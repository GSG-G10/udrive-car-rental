const router = require('express').Router();
const { getTypeControllers } = require('../controllers/cars');
const { clientError, serverError } = require('../controllers/errors');

router.get('/type', getTypeControllers);
const { login } = require('../controllers/index');

router.post('/login', login);

router.get(clientError);
router.get(serverError);

module.exports = router;
