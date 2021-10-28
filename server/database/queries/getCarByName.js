const connection = require('../connection');

const getCarByName = (carName) => connection.query('SELECT * FROM cars WHERE name LIKE $1', [`%${carName}%`]);

module.exports = { getCarByName };
