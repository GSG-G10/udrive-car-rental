const router = require('express').Router();
const { getTypeControllers } = require('../controllers/cars');

router.get('/type', getTypeControllers);
const { login } = require('../controllers/index');

router.post('/login', login);

module.exports = router;
