/* eslint-disable consistent-return */
const {
  postAdminCarsQueries,
} = require('../../database/queries/postAdminCarsQueries');

const postAdminCarsControllers = async (req, res, next) => {
  const {
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
  } = req.body;

  try {
    await postAdminCarsQueries(
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
    );
    res.status(200).json('INSERT DATA SUCCESSFULLY');
  } catch (err) {
    return next(err);
  }
};

module.exports = { postAdminCarsControllers };
