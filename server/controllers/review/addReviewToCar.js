const { postReviewsRentalsId } = require('../../database/queries');

const { commentAndRateValidation } = require('../../utils');

const addReviewToCar = async (req, res, next) => {
  try {
    const { rentalsId, comment, rate } = await commentAndRateValidation.validateAsync(
      { ...req.params, ...req.body },
    );
    await postReviewsRentalsId(comment, rentalsId, rate);
    res.json({
      status: 201,
      message: 'Review submitted successfully',
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = { addReviewToCar };
