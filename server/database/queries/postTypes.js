const connection = require('../connection');

const postTypes = (name, image) => {
  const sql = {
    text: 'INSERT INTO types (name,image) VALUES ($1, $2) RETURNING *',
    values: [name, image],
  };

  return connection.query(sql);
};
module.exports = { postTypes };
