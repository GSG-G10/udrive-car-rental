const connection = require('../connection');

const postBrands = (name, image) => {
  const sql = {
    text: 'INSERT INTO brands (name,image) VALUES ($1, $2) RETURNING *',
    values: [name, image],
  };

  return connection.query(sql);
};
module.exports = { postBrands };
