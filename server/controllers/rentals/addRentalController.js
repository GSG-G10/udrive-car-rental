const moment = require('moment');

const { boomify, rentalValidation } = require('../../utils');
const { checkDateTimeQuery, addRentalQuery } = require('../../database/queries');

const addRentalController = async (req, res, next) => {
  const { carId } = req.params;
  const id = 2;
  try {
    const {
      location,
      pickUpDateTime,
      pickOffDateTime,
    } = await rentalValidation.validateAsync(req.body);

    const pickup = moment(pickUpDateTime);
    const pickoff = moment(pickOffDateTime);

    if (moment.duration(pickoff.diff(pickup)) <= 0) {
      throw (boomify(400, 'Bad Request!', 'PickOff date must be larger than PickUp date'));
    }

    const { rows } = await checkDateTimeQuery(carId, pickUpDateTime, pickOffDateTime);
    if (rows.length) {
      throw (boomify(422, 'Validation Error', 'Car is in use'));
    }

    // Calculate the total hours to calculate the total price (hours * pricePerHour)
    const duration = moment.duration(pickoff.diff(pickup));
    const hours = duration.asHours();

    await addRentalQuery(id, carId, location, pickUpDateTime, pickOffDateTime, hours);

    return res.status(201).json({ message: 'Car rented successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = addRentalController;
