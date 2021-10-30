const connection = require('../../connection');

const addRentalQuery = (userId, carId, location, pickUpDateTime, pickOffDateTime, hours) => {
  const sql = {
    text: `INSERT INTO rentals (users_id, cars_id, location, pick_up_date_time, pick_of_date_time,total_price) 
    VALUES ($1, $2, $3, $4, $5, (SELECT price FROM cars WHERE id = $2) * $6) RETURNING *;`,
    values: [userId, carId, location, pickUpDateTime, pickOffDateTime, hours],
  };

  return connection.query(sql);
};
module.exports = addRentalQuery;
