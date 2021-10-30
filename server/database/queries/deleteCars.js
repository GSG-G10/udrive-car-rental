const connection = require('../connection');

const deleteCars = (carId) => {
  const sql = {
    text: 'DELETE  FROM cars WHERE id=$1 RETURNING id',
    values: [carId],
  };

  return connection.query(sql);
};
module.exports = { deleteCars };
