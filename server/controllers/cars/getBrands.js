/* eslint-disable consistent-return */
const { getBrandsQueries } = require('../../database/queries');

const getBrands = async (req, res, next) => {
  try {
    const results = await getBrandsQueries();
    res.json(results.rows);
  } catch (err) {
    return next(err);
  }
};

module.exports = { getBrands };
