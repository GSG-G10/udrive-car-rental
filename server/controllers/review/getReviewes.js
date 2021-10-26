/* eslint-disable consistent-return */
const { getReview } = require('../../database/queries/index');

const getReviewes = async (req, res, next) => {
  const { carId } = req.params;
  try {
    const { rows: data } = await getReview(carId);
    return res.json({
      status: 200,
      message: 'Reviews retuern successfully',
      data,
    });
  } catch (err) {
    return next(err);
  }
};
module.exports = { getReviewes };
