const { sign } = require('jsonwebtoken');
require('env2')('.env');

const signTokenPromise = (email, id, username, isAdmin) => new Promise((resolve, reject) => {
  sign({
    email, id, username, isAdmin,
  }, process.env.SECRET_KEY, (error, token) => {
    if (error) {
      reject(error);
    } else {
      resolve(token);
    }
  });
});
module.exports = { signTokenPromise };
