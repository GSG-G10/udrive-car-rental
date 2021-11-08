const connection = require('../connection');

const getCarDetailsQuery = (carId) => {
  const sql = {
    text: `SELECT cars.*, types.name as type, brands.name as brand,
    (SELECT AVG(rate) FROM reviews INNER JOIN rentals ON 
    rentals.id = reviews.rental_id WHERE rentals.car_id = cars.id) as rate
    FROM cars INNER JOIN types ON cars.type_id = types.id 
    INNER JOIN brands ON cars.brand_id = brands.id 
    WHERE cars.id = $1 ;`,
    values: [carId],
  };
  return connection.query(sql);
};
// AND (rentals.pick_off_date_time IS NULL OR rentals.pick_off_date_time > NOW())
module.exports = getCarDetailsQuery;
