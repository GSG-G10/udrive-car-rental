const bcrypt = require('bcrypt');
const { loginValidtion } = require('../../utils/validation/index');
const { checkEmail } = require('../../database/queries/index');
const { signTokenPromise } = require('../../utils/index');

const auth = async (req, res, next) => {
  try {
    const { password, email } = req.body;
    await loginValidtion.validateAsync(req.body);
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
      res.status(442).json({
        msg: err.details[0].message,
        status: 442,
      });
    } else {
      return next(err);
    }
  }
};

module.exports = auth;
