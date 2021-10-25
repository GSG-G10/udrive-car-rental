const bcrypt = require('bcrypt');
const { loginValidation } = require('../../utils/validation');
const { checkEmail } = require('../../database/queries/index');
const { signTokenPromise } = require('../../utils/index');

// eslint-disable-next-line consistent-return
const login = async (req, res, next) => {
  try {
    const { password, email } = req.body;
    await loginValidation.validateAsync(req.body);

    const { rows } = await checkEmail(email, '');
    if (!rows.length) {
      throw new Error({ message: 'invalid email or password', status: 401 });
    }
    const compared = await bcrypt.compare(password, rows[0].password);
    if (!compared) {
      throw new Error({ message: 'invalid email or password', status: 401 });
    }
    const token = await signTokenPromise(email, rows[0].id, rows[0].is_admin, rows[0].name);
    res.cookie('token', token);
    return res.json({ message: 'logged in successfully' });
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
