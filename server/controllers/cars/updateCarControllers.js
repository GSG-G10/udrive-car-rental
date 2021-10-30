const { updateCarData } = require('../../database/queries');
const { updateCarValidation } = require('../../utils');

const updateCarControllers = async (req, res, next) => {
  try {
    const result = await updateCarValidation.validateAsync({
      ...req.params,
      ...req.body,
    });
    const {
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
      carId,
    } = result;

    await updateCarData(
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
      carId,
    );
    res.json({
      status: 200,
      msg: 'Update Car Successfully',
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = { updateCarControllers };
