const connection = require('../../connection');

const getCarsQuery = ({
  brandId = -1, typeId = -1, minPrice = 0, maxPrice = 99999999, name = '', seats = -1, gearbox = '',
}) => {
  const sql = {
    text: `
        SELECT * 
        FROM
        cars c
        WHERE 
            ($1 = -1 OR c.brands_id = $1) 
            AND ($2 = -1 OR c.types_id = $2)
            AND (c.price >= $3 AND c.price <= $4)
            AND (c.name LIKE $5)
            AND ($6  = -1 OR c.seats = $6)
            AND (c.gearbox LIKE $7);
    `,
    values: [brandId, typeId, minPrice, maxPrice, `%${name}%`, seats, `%${gearbox}%`],
  };

  return connection.query(sql);
};
module.exports = { getCarsQuery };
