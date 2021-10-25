const router = require('express').Router();
const { getTypeControllers } = require('../controllers/cars');

router.get('/type', getTypeControllers);

module.exports = router;
