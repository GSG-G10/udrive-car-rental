const connection = require('../../connection');

const deleteRentalQuery = (rentalId) => connection.query(
  'DELETE FROM rentals WHERE id = $1 RETURNING id',
  [rentalId],
);

module.exports = { deleteRentalQuery };
