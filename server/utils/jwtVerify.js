const { verify } = require('jsonwebtoken');
require('env2')('.env');

const verifyTokenPromise = (theToken) => new Promise((resolve, reject) => {
  verify(theToken, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      reject(error);
    } else {
      resolve(decoded);
    }
  });
});

module.exports = { verifyTokenPromise };
