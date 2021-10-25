/* eslint-disable consistent-return */
const { getReview } = require('../../database/queries/index');

const getReviewes = async (req, res, next) => {
  try {
    const { carId } = req.params;
    const getDataReview = await getReview(carId);
    res.json(getDataReview.rows[0]);
  } catch (err) {
    return next(err);
  }
};
module.exports = { getReviewes };
