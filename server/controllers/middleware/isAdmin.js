const { boomify } = require('../../utils');

const isAdmin = (req, res, next) => {
  if (req.user.isAdmin) {
    return next();
  }
  throw boomify(403, null, 'Forbidden');
};

module.exports = isAdmin;
