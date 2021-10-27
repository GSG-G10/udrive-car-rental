const { getBrandsQueries } = require('../../database/queries');

const getBrands = async (req, res, next) => {
  try {
    const { rows } = await getBrandsQueries();
    res.json({ data: rows });
  } catch (err) {
    return next(err);
  }
};

module.exports = { getBrands };
