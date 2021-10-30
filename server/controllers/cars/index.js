const { getBrands } = require('./getBrands');
const { getTypeControllers } = require('./getTypeControllers');
const { getCars } = require('./getCars');
const getCarDetails = require('./getCarDetails');

module.exports = {
  getTypeControllers, getBrands, getCars, getCarDetails,
};
