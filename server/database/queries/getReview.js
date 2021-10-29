const connection = require('../connection');

const getReview = (carId) => {
  const sql = {
    text: 'SELECT comment,rate FROM comments  INNER JOIN  rentals  ON comments.rentals_id = $1',
    values: [carId],
  };

  return connection.query(sql);
};
module.exports = { getReview };
