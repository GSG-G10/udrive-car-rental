const connection = require('../connection');

const postBrands = (name, img) => {
  const sql = {
    text: 'INSERT INTO brands (name,img) VALUES ($1, $2) RETURNING *',
    values: [name, img],
  };

  return connection.query(sql);
};
module.exports = { postBrands };
