const connection = require('../../connection');

const deleteRentalQuery = ({ rentalId, userId }) => connection.query(
  'DELETE FROM rentals WHERE id = $1 AND users_id = $2 RETURNING id',
  [rentalId, userId],
);

module.exports = { deleteRentalQuery };
