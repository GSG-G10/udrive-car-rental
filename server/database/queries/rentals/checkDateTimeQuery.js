const connection = require('../../connection');

const checkDateTimeQuery = (carId, pickUpDateTime, PickOffDateTime) => {
  const sql = {
    text: `SELECT car_id FROM rentals WHERE 
    car_id = $1 AND (($2 BETWEEN pick_up_date_time AND pick_off_date_time) 
    OR ($3 BETWEEN pick_up_date_time AND pick_off_date_time) 
    OR ($2 >= pick_up_date_time AND $3 <= pick_off_date_time)
    OR ($2 <= pick_up_date_time AND $3 >= pick_off_date_time));`,
    values: [carId, pickUpDateTime, PickOffDateTime],
  };

  return connection.query(sql);
};
module.exports = checkDateTimeQuery;
