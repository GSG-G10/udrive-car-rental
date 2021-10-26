const { getReview } = require('../../database/queries/index');

const getReviewes = async (req, res, next) => {
  const { carId } = req.params;
  try {
    const { rows: data } = await getReview(carId);
    res.json({
      status: 200,
      message: 'Reviews retuern successfully',
      data,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = { getReviewes };
