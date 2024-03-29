const bcrypt = require('bcrypt');
const { loginValidation } = require('../../utils/validation');
const { checkEmail } = require('../../database/queries/index');
const { signTokenPromise } = require('../../utils/index');
const { boomify } = require('../../utils');

const login = async (req, res, next) => {
  try {
    const { password, email } = req.body;
    await loginValidation.validateAsync(req.body);

    const { rows } = await checkEmail(email, '');
    if (!rows.length) {
      throw (boomify(400, 'Login Error', 'invalid email or password'));
    }
    const compared = await bcrypt.compare(password, rows[0].password);
    if (!compared) {
      throw (boomify(400, 'Login Error', 'invalid email or password'));
    }
    const token = await signTokenPromise(rows[0].id, rows[0].name, rows[0].is_admin);
    res.cookie('token', token);
    return res.json({
      message: 'logged in successfully',
      user: {
        id: rows[0].id,
        name: rows[0].name,
        isAdmin: rows[0].is_admin,
      },
    });
  } catch (err) {
    if (err.details) {
      res.status(400).json({
        msg: err.details[0].message,
        status: 400,
      });
    } else {
      return next(err);
    }
  }
};

module.exports = { login };
