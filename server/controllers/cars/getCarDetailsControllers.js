const { getCarDetailsQuery } = require('../../database/queries');
const { boomify } = require('../../utils');

const getCarDetailsController = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (id > 0) {
      const { rows } = await getCarDetailsQuery(id);
      res.json({ data: rows });
    }
    throw boomify(400, 'Bad Request', 'Cant get car by id');
  } catch (err) {
    return next(err);
  }
};

module.exports = getCarDetailsController;
