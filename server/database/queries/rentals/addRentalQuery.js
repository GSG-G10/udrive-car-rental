const connection = require('../../connection');

const addRentalQuery = (userId, carId, pickUpDateTime, PickOffDateTime, TotalPrice) => {
  const sql = {
    text: 'INSERT INTO rentals (users_id,cars_id ,pick_up_date_time, pick_of_date_time,total_price) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    values: [userId, carId, pickUpDateTime, PickOffDateTime, TotalPrice],
  };

  return connection.query(sql);
};
module.exports = addRentalQuery;
