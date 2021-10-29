const connection = require('../connection');

const updateCarData = (
  name,
  door,
  typesId,
  brandsId,
  releaseYear,
  gearbox,
  price,
  seats,
  imgCar,
  description,
  color,
  id,
) => connection.query(
  `UPDATE cars SET name = $1, door = $2, types_id =$3,
  brands_id = $4, release_year =$5, gearbox =$6, price =$7, seats = $8 , img_car =$9,
  description = $10, color = $11 WHERE id = $12;
  `,
  [
    name,
    door,
    typesId,
    brandsId,
    releaseYear,
    gearbox,
    price,
    seats,
    imgCar,
    description,
    color,
    id,
  ],
);

module.exports = { updateCarData };
