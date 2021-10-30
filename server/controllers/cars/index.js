const { getBrands } = require('./getBrands');
const { getTypeControllers } = require('./getTypeControllers');
const { updateCarControllers } = require('./updateCarControllers');

const { deleteTypeControllers } = require('./deleteTypeControllers');

const { getCars } = require('./getCars');
const getCarDetails = require('./getCarDetails');

const { getCarAdminByName } = require('./getCarAdminByName');

module.exports = {
  getTypeControllers,
  getBrands,
  getCars,
  getCarDetails,
  deleteTypeControllers,
  getCarAdminByName,
  updateCarControllers,
};
