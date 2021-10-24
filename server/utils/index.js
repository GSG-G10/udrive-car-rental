const { signTokenPromise } = require('./jwtSign');
const { verifyTokenPromise } = require('./jwtVerify');

module.exports = { signTokenPromise, verifyTokenPromise };
