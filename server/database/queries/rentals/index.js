const { historyRentalsQuery } = require('./historyRintalsQuery');
const { pendingRentalsQuery } = require('./pendingRentalsQuery');

const addRentalQuery = require('./addRentalQuery');
const checkDateTimeQuery = require('./checkDateTimeQuery');

module.exports = {
  addRentalQuery, checkDateTimeQuery, pendingRentalsQuery, historyRentalsQuery,
};
