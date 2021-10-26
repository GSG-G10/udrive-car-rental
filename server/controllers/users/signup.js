const { hash } = require('bcrypt');
const { signUpQuery } = require('../../database/queries');
const { signTokenPromise } = require('../../utils');
const { signUpValidation } = require('../../utils/validation');

const signUp = async (req, res, next) => {
  try {
    const {
      name, email, password, phone,
    } = await signUpValidation.validateAsync(req.body);

    const hasedPassword = await hash(password, 10);

    const { rows } = await signUpQuery(name, email, hasedPassword, phone);

    const token = await signTokenPromise(rows[0].email, rows[0].id, rows[0].name, rows[0].is_admin);

    return res.status(201).cookie('token', token).json({ message: 'Signed Up Successfully !' });
  } catch (err) {
    return next(err);
  }
};

module.exports = signUp;
