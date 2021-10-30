const connection = require('../connection');

const postAdminCarsQueries = (
  name,
  door,
  typeId,
  brandId,
  releaseYear,
  gearbox,
  price,
  seats,
  imgCar,
  description,
  color,
) => connection.query(
  'INSERT INTO cars (name,door,types_id,brands_id,release_year,gearbox,price,seats,img_car,description,color) VALUES ($1 , $2 , $3 , $4 , $5 , $6 , $7 , $8 , $9 , $10 ,$11)',
  [
    name,
    door,
    typeId,
    brandId,
    releaseYear,
    gearbox,
    price,
    seats,
    imgCar,
    description,
    color,
  ],
);

module.exports = { postAdminCarsQueries };
