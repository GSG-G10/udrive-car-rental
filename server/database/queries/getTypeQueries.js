const connection = require('../connection');

const getTypeQueries = () => connection.query('SELECT * FROM types');

module.exports = { getTypeQueries };
