const connection = require('../connection');

const getCarDetailsQuery = (carId) => {
  const sql = {
    text: 'SELECT cars.*, types.name as types_name, brands.name as brands_name FROM cars INNER JOIN types ON cars.types_id = types.id INNER JOIN brands ON cars.brands_id = brands.id WHERE cars.id = $1',
    values: [carId],
  };
  return connection.query(sql);
};

module.exports = getCarDetailsQuery;
