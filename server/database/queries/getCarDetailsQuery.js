const connection = require('../connection');

const getCarDetailsQuery = (carId) => {
  const sql = {
    text: `SELECT cars.*, types.name as type, brands.name as brand,
    (SELECT AVG(rate) FROM reviews INNER JOIN rentals ON 
    rentals.id = reviews.rental_id WHERE rentals.car_id = cars.id) as rate,
    rentals.pick_up_date_time, rentals.pick_off_date_time 
    FROM cars INNER JOIN types ON cars.type_id = types.id 
    INNER JOIN brands ON cars.brand_id = brands.id 
    INNER JOIN rentals ON cars.id = rentals.car_id WHERE cars.id = $1 AND rentals.pick_off_date_time > NOW();`,
    values: [carId],
  };
  return connection.query(sql);
};

module.exports = getCarDetailsQuery;
