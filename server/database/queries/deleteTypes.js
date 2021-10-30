const connection = require('../connection');

const deleteTypes = (typeId) => connection.query('DELETE FROM types WHERE id=$1', [typeId]);

module.exports = { deleteTypes };
