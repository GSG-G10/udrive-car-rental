/* eslint-disable consistent-return */
const {
  postAdminCarsQueries,
} = require('../../database/queries/postAdminCarsQueries');
const { boomify } = require('../../utils');

const { addCarValidation } = require('../../utils');

const addCar = async (req, res, next) => {
  try {
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
    } = await addCarValidation.validateAsync(req.body);

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

    return res.status(201).json({ message: 'INSERT DATA SUCCESSFULLY' });
  } catch (err) {
    if (err.details) {
      return next(boomify(422, 'Validation Error', err.details[0].message));
    }
    return next(err);
  }
};

module.exports = { addCar };
