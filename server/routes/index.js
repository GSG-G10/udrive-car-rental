const router = require('express').Router();
const { login } = require('../controllers/index');

router.post('/login', login);

const { getBrands } = require('../controllers/cars');

router.get('/brands', getBrands);

module.exports = router;
