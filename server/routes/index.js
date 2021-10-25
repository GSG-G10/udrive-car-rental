const router = require('express').Router();
const { getReviewes } = require('../controllers/index');

router.get('/review/:carId', getReviewes);
module.exports = router;
