const getCarDetailsQuery = require('../../database/queries');

const getCarDetailsController = async (req, res, next) => {
  const { id } = req.params;
  try {
    const { rows } = await getCarDetailsQuery(id);
    res.json({ data: rows });
  } catch (err) {
    return next(err);
  }
};

module.exports = getCarDetailsController;
