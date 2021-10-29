const { boomify, rentalValidation } = require('../../utils');
const { checkDateTimeQuery, addRentalQuery } = require('../../database/queries');

const addRentalController = async (req, res, next) => {
  const userId = 2;
  try {
    const {
      carId,
      pickUpDateTime,
      pickOffDateTime,
    } = await rentalValidation.validateAsync(req.body);

    const { rows } = await checkDateTimeQuery(carId, pickUpDateTime, pickOffDateTime);

    if (rows.length) {
      throw (boomify(422, 'Validation Error', 'Car is in use'));
    }
    await addRentalQuery(userId, carId, pickUpDateTime, pickOffDateTime);

    return res.status(200).json({ message: 'Car rented successfully' });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = addRentalController;
