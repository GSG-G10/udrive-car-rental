const { getAdminUsers } = require('../../database/queries');

const getAdminUsersControllers = async (req, res, next) => {
  try {
    const { rows } = await getAdminUsers();
    res.json({ data: rows });
  } catch (err) {
    return next(err);
  }
};

module.exports = { getAdminUsersControllers };
