const { pendingRentalsQuery } = require('../../database/queries');

const pendingRentals = async (req, res, next) => {
  try {
    const { rows } = await pendingRentalsQuery(req.user.id);
    res.json({ data: rows });
  } catch (err) {
    next(err);
  }
};

module.exports = { pendingRentals };
