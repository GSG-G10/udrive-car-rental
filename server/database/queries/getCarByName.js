const connection = require('../connection');

const getCarByName = (name = '') => connection.query(
  'SELECT c.id, c.name, b.name as brand, t.name as type, c.gearbox, c.seats, c.door, c.price FROM cars c LEFT JOIN brands b ON b.id = c.brand_id LEFT JOIN types t ON t.id = c.type_id WHERE c.name LIKE $1',
  [`%${name}%`],
);

module.exports = { getCarByName };
