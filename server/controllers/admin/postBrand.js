const { postBrands } = require('../../database/queries/index');

const postBrand = async (req, res, next) => {
  try {
    const { rows: data } = await postBrands();
    res.json({
      status: 200,
      message: 'getBrand retuern successfully',
      data,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = { postBrand };
