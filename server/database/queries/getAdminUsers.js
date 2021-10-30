const connection = require('../connection');

const getAdminUsers = () => connection.query('SELECT * FROM users ');

module.exports = { getAdminUsers };
