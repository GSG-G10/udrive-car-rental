const connection = require('./connect');

const getTypeQueries = () => connection.query('SELECT * FROM types');

module.exports = { getTypeQueries };
