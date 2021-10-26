const { postBrands } = require('../../database/queries/index');

const postBrand = async (req, res) => {
  const { name, image } = req.body;
  try {
    const { rows: data } = await postBrands(name, image);
    res.json({
      status: 200,
      message: 'getBrand retuern successfully',
      data,
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = { postBrand };
