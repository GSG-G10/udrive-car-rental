const connection = require('../connection');

const getCarByName = (name) => connection.query('SELECT * FROM cars WHERE name LIKE $1', [`%${name}%`]);

module.exports = { getCarByName };
