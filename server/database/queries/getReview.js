const connection = require('../connection');

const getReview = (carId) => {
  const sql = {
    text: 'SELECT review,rate FROM reviews  INNER JOIN  rentals  ON reviews.rental_id = rentals.id AND rentals.car_id = $1',
    values: [carId],
  };

  return connection.query(sql);
};
module.exports = { getReview };
