const { verifyTokenPromise } = require('../../utils');

const isAuth = async (req, res, next) => {
  const { accessToken } = req.cookies;
  try {
    if (accessToken) {
      const userToken = await verifyTokenPromise(accessToken);
      req.user = userToken;
      return next();
    }
    throw new Error({ status: 401, msg: 'Unauthorized' });
  } catch (err) {
    return next(err);
  }
};

module.exports = isAuth;
