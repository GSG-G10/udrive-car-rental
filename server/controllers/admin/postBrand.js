const { postBrands } = require('../../database/queries/index');
const { brandValiadtion } = require('../../utils');
const { boomify } = require('../../utils/index');

const postBrand = async (req, res, next) => {
  try {
    const { name, image } = await brandValiadtion.validateAsync(
      req.body,
    );
    const { rows: data } = await postBrands(name, image);
    res.status(201).json({
      message: 'successfully post brand',
      data,
    });
  } catch (err) {
    if (err.details) {
      return next(boomify(
        422,
        'validation error',
        err.details[0].message,
      ));
    }

    next(err);
  }
};
module.exports = { postBrand };
