const { getCarDetailsQuery } = require('../../database/queries');
const { boomify } = require('../../utils');

const getCarDetailsController = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (id > 0) {
      const { rows } = await getCarDetailsQuery(id);
      if (rows.length === 0) {
        throw boomify(404, 'Not Found', 'There is no car');
      }
      res.json({ data: rows });
    }
    throw boomify(400, 'Bad Request', 'Bad Request');
  } catch (err) {
    return next(err);
  }
};

module.exports = getCarDetailsController;
