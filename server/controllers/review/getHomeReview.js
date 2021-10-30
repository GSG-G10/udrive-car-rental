const { getHomeReviews } = require('../../database/queries/index');

const getHomeReview = async (req, res, next) => {
  try {
    const { rows: data } = await getHomeReviews();
    res.json({
      status: 200,
      message: 'Reviews retuern in home successfully',
      data,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = { getHomeReview };
