const connection = require('../connection');

const deleteBrandQuery = (brandId) => {
  const sql = {
    text: 'DELETE FROM brands WHERE id = $1 RETURNING id',
    values: [brandId],
  };

  return connection.query(sql);
};
module.exports = deleteBrandQuery;
