const { getBrandsQueries } = require('../../database/queries');

const getBrands = (req, res, next) => {
  getBrandsQueries()
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

module.exports = { getBrands };
