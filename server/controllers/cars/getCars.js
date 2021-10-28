const { getCarsQuery } = require('../../database/queries');

const getCars = async (req, res, next) => {
  try {
    const { rows } = await getCarsQuery(req.query);
    res.json({ data: rows });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = { getCars };
