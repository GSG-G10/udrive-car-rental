const { getBrands } = require('./getBrands');
const { getTypeControllers } = require('./getTypeControllers');
const { deleteTypeControllers } = require('./deleteTypeControllers');

const { getCars } = require('./getCars');
const getCarDetails = require('./getCarDetails');

module.exports = {
  getTypeControllers,
  getBrands,
  getCars,
  getCarDetails,
  deleteTypeControllers,
};
