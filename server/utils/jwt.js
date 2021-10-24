const { sign } = require('jsonwebtoken');
require('env2')('.env');

const signTokenPromise = (theToken) => new Promise((resolve, reject) => {
  sign(theToken, process.env.SECRET_KEY, (error, token) => {
    if (error) {
      reject(error);
    } else {
      resolve(token);
    }
  });
});

module.exports = { signTokenPromise };

