const { deleteRentalQuery } = require('./deleteRentalQuery');
const { historyRentalsQuery } = require('./historyRintalsQuery');
const { pendingRentalsQuery } = require('./pendingRentalsQuery');

const addRentalQuery = require('./addRentalQuery');
const checkDateTimeQuery = require('./checkDateTimeQuery');

module.exports = {
  deleteRentalQuery,
  addRentalQuery,
  checkDateTimeQuery,
  pendingRentalsQuery,
  historyRentalsQuery,
};
