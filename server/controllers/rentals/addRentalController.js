const { boomify } = require('../../utils');
const { checkDateTimeQuery } = require('../../database/queries');

const addRentalController = async (req, res, next) => {
  try {
    const {
      carId,
      pickUpDateTime,
      pickOffDateTime,
    } = (req.body);

    const { rows } = await checkDateTimeQuery(carId, pickUpDateTime, pickOffDateTime);

    if (rows.length) {
      throw (boomify(422, 'Validation Error', 'Car is in use'));
    }

    return res.status(200).json({ message: 'Car rented successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = addRentalController;
