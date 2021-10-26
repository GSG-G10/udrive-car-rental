const { postTypes } = require('../../database/queries/index');

const postType = async (req, res, next) => {
  const { name, image } = req.body;
  try {
    const { rows: data } = await postTypes(name, image);
    res.json({
      status: 200,
      message: 'successfully post type',
      data,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = { postType };
