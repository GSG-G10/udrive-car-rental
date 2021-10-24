const bcrypt = require('bcrypt');
const checkEmail = require('../../utils/index');
const { loginValidtion } = require('../../database/queries/index');
const { createToken } = require('../../utils/createToken');

exports.auth = async (req, res) => {
  // validate data before log in
  const { error } = await loginValidtion(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check if the email exists
  const user = await checkEmail(req.body.email);
  if (user.rowCount === 0) return res.status(400).json({ success: false, msg: 'Invalid Email, you have to sign up first!' });

  // check password
  const dbPassword = user.rows[0].password;
  const validPassword = await bcrypt.compare(req.body.password, dbPassword);
  if (!validPassword) return res.status(400).json({ success: false, msg: 'Incorrect password' });

  // create token and store it in cookies
  const { id, name } = user.rows[0];
  createToken(id, name, process.env.TOKEN_SERCRET, res);
  res.json({ success: true, message: 'you are logged in now!' });
};
