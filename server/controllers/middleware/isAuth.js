const { verifyTokenPromise } = require('../../utils');

const isAuth = async (req, res, next) => {
  const { token } = req.cookies;
  try {
    if (token) {
      const userToken = await verifyTokenPromise(token);
      req.user = userToken;
      return next();
    }
    throw new Error({ message: 'Unauthorized', status: 401 });
  } catch (err) {
    return next(err);
  }
};

module.exports = isAuth;
