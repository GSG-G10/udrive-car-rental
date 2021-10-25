const router = require('express').Router();

const { getBrands } = require('../controllers/cars');

router.get('/brands', getBrands);

module.exports = router;
