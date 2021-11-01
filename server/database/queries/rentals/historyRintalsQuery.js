const connection = require('../../connection');

const historyRentalsQuery = (userId) => connection.query(
  `
    SELECT 
      c.name,
      r.total_price as price, 
      r.pick_up_date_time as start_date, 
      r.pick_off_date_time as end_date,
      c.color 
    FROM rentals r 
    INNER JOIN cars c ON c.id = r.car_id 
    WHERE r.user_id = $1 AND r.pick_off_date_time < NOW()
  `,
  [userId],
);

module.exports = { historyRentalsQuery };
