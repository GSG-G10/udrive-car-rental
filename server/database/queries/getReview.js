const connection = require('../connection');

const getReview = (carId) => {
  const sql = {
    text: 'SELECT comment,rate FROM comments  INNER JOIN  rentals  ON comments.rentals_id = rentals.id AND rentals.cars_id = $1',
    values: [carId],
  };

  return connection.query(sql);
};
module.exports = { getReview };