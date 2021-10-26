const { getReview } = require('../../database/queries/index');

const getBrand = async (req, res, next) => {
  try {
    const { rows: data } = await getReview();
    res.json({
      status: 200,
      message: 'getBrand retuern successfully',
      data,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = { getBrand };
