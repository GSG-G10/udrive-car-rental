const { deleteRentalQuery } = require('../../database/queries');
const { boomify } = require('../../utils');

const deleteRental = async (req, res, next) => {
  const { rentalId } = req.params;
  try {
    const { rows } = await deleteRentalQuery(rentalId);
    if (rows.length) {
      return res.json({ status: 200, message: 'rental deleted successfully !' });
    }
    throw boomify(400, 'Bad Request', 'Some thin went wrong !');
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  deleteRental,
};
