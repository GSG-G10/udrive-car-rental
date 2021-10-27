/* eslint-disable consistent-return */
const {
  postAdminCarsQueries,
} = require('../../database/queries/postAdminCarsQueries');

const { addCarValidation } = require('../../utils');

const addCar = async (req, res, next) => {
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

  await addCarValidation.validateAsync(req.body);

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
    res.status(201).json({ message: 'INSERT DATA SUCCESSFULLY' });
  } catch (err) {
    return next(err);
  }
};

module.exports = { addCar };
