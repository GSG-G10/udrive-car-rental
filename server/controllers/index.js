const { getReviewes } = require('./review/index');

const { serverError, clientError } = require('./errors');
const { login } = require('./users');
const { getTypeControllers } = require('./cars');
const { isAuth, isAdmin } = require('./middleware');
const { getBrand } = require('./admin/indx');

module.exports = {
  login, serverError, clientError, getTypeControllers, getReviewes, isAuth, isAdmin, getBrand,
};
