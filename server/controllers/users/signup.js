const { hash } = require('bcrypt');
const { signUpQuery } = require('../../database/queries');
const { signTokenPromise } = require('../../utils');
const { signUpValidation } = require('../../utils/validation');

const signUp = async (req, res, next) => {
  const data = req.body;

  try {
    await signUpValidation.validateAsync(data);

    const hasedPassword = await hash(data.password, 10);

    const { rows } = await signUpQuery(data.name, data.email, hasedPassword, data.phone);

    const token = await signTokenPromise(rows[0].email, rows[0].id, rows[0].name, rows[0].is_admin);

    return res.cookie('token', token).json({ message: 'Signed Up Successfully !' });
  } catch (err) {
    return next(err);
  }
};

module.exports = signUp;
