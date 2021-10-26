const { postBrands } = require('../../database/queries/index');

const postBrand = async (req, res, next) => {
  const { name, image } = req.body;
  try {
    const { rows: data } = await postBrands(name, image);
    res.json({
      status: 200,
      message: 'successfully post brand',
      data,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = { postBrand };
