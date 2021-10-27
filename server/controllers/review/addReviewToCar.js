const {
  postReviewsRentalsId,
} = require('../../database/queries/postReviewsRentalsId');

const {
  rentalsIdValidation,
  commentAndRateValidation,
} = require('../../utils');

const addReviewToCar = async (req, res, next) => {
  try {
    const { rentalsId } = await rentalsIdValidation.validateAsync(req.params);
    const { comment, rate } = await commentAndRateValidation.validateAsync(
      req.body,
    );
    await postReviewsRentalsId(comment, rentalsId, rate);
    res.json({
      status: 200,
      message: 'Review submitted successfully',
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = { addReviewToCar };
