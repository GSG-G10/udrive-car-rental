const { verifyTokenPromise } = require('../../utils');
const { boomify } = require('../../utils');

const isAuth = async (req, res, next) => {
  const { token } = req.cookies;
  try {
    if (token) {
      const userToken = await verifyTokenPromise(token);
      req.user = userToken;
      return next();
    }
    throw boomify(401, null, 'Unauthorized');
  } catch (err) {
    return next(err);
  }
};

module.exports = isAuth;
