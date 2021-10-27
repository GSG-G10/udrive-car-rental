const connection = require('../connection');

const getAdminUsers = () => connection.query("select * from users WHERE is_admin = 'True' ");

module.exports = { getAdminUsers };
