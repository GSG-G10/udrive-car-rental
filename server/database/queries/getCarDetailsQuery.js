const connection = require('../connection');

const getCarDetailsQuery = (carId) => {
  const sql = {
    text: `SELECT cars.*, types.name as type, brands.name as brand,
    (SELECT AVG(rate) FROM comments INNER JOIN rentals ON 
    rentals.id = comments.rentals_id WHERE rentals.cars_id = cars.id) as rate,
    rentals.pick_up_date_time, rentals.pick_of_date_time 
    FROM cars INNER JOIN types ON cars.types_id = types.id 
    INNER JOIN brands ON cars.brands_id = brands.id 
    INNER JOIN rentals ON cars.id = rentals.cars_id WHERE cars.id = $1 AND rentals.pick_of_date_time > NOW();`,
    values: [carId],
  };
  return connection.query(sql);
};

module.exports = getCarDetailsQuery;
