const router = require('express').Router();
const { getReviewes } = require('../controllers/index');
const { login } = require('../controllers/index');

router.post('/login', login);

router.get('/review/:carId', getReviewes);
module.exports = router;
