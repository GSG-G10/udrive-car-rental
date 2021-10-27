const { postBrands } = require('../../database/queries/index');

const postBrand = async (req, res, next) => {
  const { name, image } = req.body;
  try {
    const { rows: data } = await postBrands(name, image);
    res.status(201).json({
      message: 'successfully post brand',
      data,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = { postBrand };
