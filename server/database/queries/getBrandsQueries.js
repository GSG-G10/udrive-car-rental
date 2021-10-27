const connection = require('../connection');

const getBrandsQueries = () => connection.query('SELECT * FROM brands');

module.exports = { getBrandsQueries };
