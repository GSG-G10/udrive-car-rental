const { boomify } = require('../../utils');

const isAdmin = (req, res, next) => {
  if (req.user.isAdmin) next();
  throw boomify(403, null, 'Forbidden');
};

module.exports = isAdmin;
