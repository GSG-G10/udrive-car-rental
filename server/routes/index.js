const router = express.Router();
const auth = require('../controllers/users/index')
router.post('/login',auth);