const router = require('express').Router();
const { login } = require('../controllers/index');

router.post('/login', login);

module.exports = router;
