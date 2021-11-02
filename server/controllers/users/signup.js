const { hash } = require('bcrypt');
const { signUpQuery } = require('../../database/queries');
const { signTokenPromise, boomify } = require('../../utils');
const { signUpValidation } = require('../../utils/validation');

const signUp = async (req, res, next) => {
  try {
    const {
      name, email, password, phone,
    } = await signUpValidation.validateAsync(req.body);

    const hasedPassword = await hash(password, 10);

    const { rows } = await signUpQuery(name, email, hasedPassword, phone);

    const token = await signTokenPromise(rows[0].id, rows[0].name, rows[0].is_admin);

    return res.status(201).cookie('token', token).json({
      message: 'Signed Up Successfully !',
      user: {
        id: rows[0].id,
        name: rows[0].name,
        isAdmin: rows[0].is_admin,
      },
    });
  } catch (err) {
    if (err.code === '23505') {
      return next(boomify(
        422,
        'database error',
        `${err.constraint.split('_')[1]} alerdy in use`,
      ));
    }

    if (err.details) {
      return next(boomify(
        422,
        'validation error',
        err.details[0].message,
      ));
    }

    return next(err);
  }
};

module.exports = { signUp };
