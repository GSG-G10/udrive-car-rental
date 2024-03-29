const connection = require('../connection');

const postReviewsRentalsId = (comment, rentalsId, rate) => connection.query(
  'INSERT INTO reviews (review,rental_id,rate) VALUES ($1, $2, $3)',
  [comment, rentalsId, rate],
);

module.exports = { postReviewsRentalsId };
