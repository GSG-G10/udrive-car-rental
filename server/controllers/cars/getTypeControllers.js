const { getTypeQueries } = require('../../database/queries');

const getTypeControllers = (req, res, next) => {
  getTypeQueries()
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

module.exports = { getTypeControllers };
