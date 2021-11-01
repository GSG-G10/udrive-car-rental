const { deleteRental } = require('./deleteRental');
const { historyRentals } = require('./historyRentals');
const { pendingRentals } = require('./pendingRentals');
const addRentalController = require('./addRentalController');

module.exports = {
  deleteRental,
  pendingRentals,
  historyRentals,
  addRentalController,
};
