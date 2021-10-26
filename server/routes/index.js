const router = require('express').Router();
const { getTypeControllers } = require('../controllers/cars');
const { postAdminCarsControllers } = require('../controllers');

router.get('/type', getTypeControllers);
const { login } = require('../controllers/index');

router.post('/login', login);
router.post('/admin/cars', postAdminCarsControllers);

module.exports = router;
