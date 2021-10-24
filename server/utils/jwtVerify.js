const { verify } = require('jsonwebtoken');

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
