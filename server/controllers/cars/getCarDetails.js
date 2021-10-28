const { getCarDetailsQuery } = require('../../database/queries');
const { boomify } = require('../../utils');

const getCarDetails = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (id > 0) {
      const { rows } = await getCarDetailsQuery(id);
      return res.json({ data: rows });
    }
    throw boomify(400, 'Bad Request', 'Bad Request');
  } catch (err) {
    return next(err);
  }
};

module.exports = getCarDetails;
