const { historyRentalsQuery } = require('../../database/queries');

const historyRentals = async (req, res, next) => {
  try {
    const { rows } = await historyRentalsQuery(req.user.id);
    res.json({ data: rows });
  } catch (err) {
    next(err);
  }
};

module.exports = { historyRentals };
