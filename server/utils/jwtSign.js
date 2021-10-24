const { sign } = require('jsonwebtoken');

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
