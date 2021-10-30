const { deleteCars } = require('../../database/queries');
const { boomify } = require('../../utils');

const deleteCar = async (req, res, next) => {
  const { carId } = req.params;

  try {
    const { rows: data } = await deleteCars(carId);
    if (!data.length) {
      throw boomify(400, 'Bad Request', 'There is no cars found to delete');
    }
    res.json({
      message: 'car deleted successfully',
      data,
    });
  } catch (err) {
    if (err.details) {
      return next(boomify(
        422,
        'validation error',
        err.details[0].message,
      ));
    }

    next(err);
  }
};
module.exports = { deleteCar };
