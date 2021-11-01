const { deleteBrandQuery } = require('../../database/queries');
const { boomify } = require('../../utils');

const deleteBrand = async (req, res, next) => {
  const { brandId } = req.params;
  try {
    const { rows } = await deleteBrandQuery(brandId);
    if (rows.length) {
      return res.json({ status: 200, message: 'Brand deleted successfully !' });
    }
    throw boomify(400, 'Bad Request', 'Some thing went wrong !');
  } catch (err) {
    next(err);
  }
};

module.exports = deleteBrand;
