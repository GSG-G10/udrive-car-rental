const connection = require('../connection');

const getCarDetailsQuery = (carId) => {
  const sql = {
    text: `SELECT cars.*, types.name as type, brands.name as brand,
    (SELECT AVG(rate) FROM comments INNER JOIN rentals ON 
    rentals.id = comments.rentals_id WHERE rentals.cars_id = cars.id) as rate 
    FROM cars INNER JOIN types ON cars.types_id = types.id 
    INNER JOIN brands ON cars.brands_id = brands.id WHERE cars.id = $1`,
    values: [carId],
  };
  return connection.query(sql);
};

module.exports = getCarDetailsQuery;
