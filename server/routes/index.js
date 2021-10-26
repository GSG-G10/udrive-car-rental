const router = require('express').Router();
const {
  login, clientError, serverError, getTypeControllers,
} = require('../controllers/index');

router.get('/type', getTypeControllers);

router.post('/login', login);

router.get(clientError);
router.get(serverError);

module.exports = router;
