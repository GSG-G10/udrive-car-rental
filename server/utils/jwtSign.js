const { sign } = require('jsonwebtoken');

const signTokenPromise = (id, name, isAdmin) => new Promise((resolve, reject) => {
  sign({
    id, name, isAdmin,
  }, process.env.SECRET_KEY, (error, token) => {
    if (error) {
      reject(error);
    } else {
      resolve(token);
    }
  });
});
module.exports = { signTokenPromise };
