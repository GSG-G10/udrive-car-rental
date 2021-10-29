const { deleteTypes } = require('../../database/queries');

const deleteTypeControllers = async (req, res, next) => {
  try {
    const { typeId } = req.params;
    await deleteTypes(typeId);
    res.json({
      status: 201,
      message: 'Car Type Deleted Successfully',
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = { deleteTypeControllers };
