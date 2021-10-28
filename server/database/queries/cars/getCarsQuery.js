const connection = require('../../connection');

const getCarsQuery = ({
  brandId = -1, typeId = -1, minPrice = 0, maxPrice = 99999999, name = '', seats = -1, gearbox = '', startDate = 'NOW()', endDate = 'NOW()',
}) => {
  const sql = {
    text: `
        SELECT 
          c.id,
          c.name, 
          c.door,
          c.gearbox,
          c.price,
          c.img_car,
          t.name as type,
          (SELECT AVG(rate) FROM comments WHERE rentals_id = r.id) as rate
        FROM
        cars c 
        LEFT JOIN rentals r ON c.id = r.cars_id
        LEFT JOIN types t ON t.id = c.types_id
        WHERE 
            ($1 = -1 OR c.brands_id = $1) 
            AND ($2 = -1 OR c.types_id = $2)
            AND (c.price >= $3 AND c.price <= $4)
            AND (c.name LIKE $5)
            AND ($6  = -1 OR c.seats = $6)
            AND (c.gearbox LIKE $7)
            AND (
                  ($8 = NOW() AND $9 = NOW())
                  OR (r.pick_up_date_time IS NULL OR r.pick_of_date_time IS NULL)
                  OR
                    (  
                      ($8 NOT BETWEEN r.pick_up_date_time AND r.pick_of_date_time) 
                      AND ($9 NOT BETWEEN r.pick_up_date_time AND r.pick_of_date_time) 
                      AND NOT ($8 <= r.pick_up_date_time AND $9 >= r.pick_of_date_time)
                    )
                )
        GROUP BY c.id, r.id,t.name;
    `,
    values: [brandId, typeId, minPrice, maxPrice, `%${name}%`, seats, `%${gearbox}%`, startDate, endDate],
  };

  return connection.query(sql);
};
module.exports = { getCarsQuery };
