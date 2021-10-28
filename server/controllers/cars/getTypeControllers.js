const { getTypeQueries } = require('../../database/queries');

const getTypeControllers = async (req, res, next) => {
  try {
    const getTypeData = await getTypeQueries();
    res.json(getTypeData.rows);
  } catch (err) {
    return next(err);
  }
};

module.exports = { getTypeControllers };
