const express = require('express');
const auth = require('../controllers/users/index');

const router = express.Router();

router.post('/login', auth);

module.exports = router;
