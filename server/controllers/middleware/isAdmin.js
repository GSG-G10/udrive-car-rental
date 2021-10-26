const isAdmin = (req, res, next) => {
  if (req.user.isAdmin) return next();
  throw new Error({ message: 'Forbidden', status: 403 });
};

module.exports = isAdmin;
