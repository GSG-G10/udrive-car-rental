const { getReview } = require('../../database/queries/index');

const getReviewes = (req, res) => {
  const { carId } = req.params;
  getReview(carId)
    .then(({ rows }) => res.json({ data: rows[0] }))
    .catch((err) => res.json({ status: 'err', error: err }));
};

module.exports = { getReviewes };
