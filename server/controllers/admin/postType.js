const { postTypes } = require('../../database/queries');
const { boomify, typeValidation } = require('../../utils');

const postType = async (req, res, next) => {
  try {
    const { name, image } = await typeValidation.validateAsync(
      req.body,
    );
    const { rows: data } = await postTypes(name, image);
    res.status(201).json({
      message: 'successfully post type',
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
module.exports = { postType };
