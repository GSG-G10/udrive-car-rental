const connection = require('../connection');

const getReview = (rate) => {
  const sql = {
    text: 'SELECT comment,rate FROM comments WHERE rate >= 4',
    values: [rate],
  };

  return connection.query(sql);
};
module.exports = { getReview };
