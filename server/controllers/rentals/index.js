const { historyRentals } = require('./historyRentals');
const { pendingRentals } = require('./pendingRentals');
const addRentalController = require('./addRentalController');

module.exports = {
  pendingRentals,
  historyRentals,
  addRentalController,
};
