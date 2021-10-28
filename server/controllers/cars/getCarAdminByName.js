const { getCarByName } = require('../../database/queries');

const getCarAdminByName = async (req, res, next) => {
  try {
    const { carName } = req.query;
    const { rows } = await getCarByName(carName);
    res.json({
      data: rows,
      status: 200,
      message: 'give car successfully',
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = { getCarAdminByName };
