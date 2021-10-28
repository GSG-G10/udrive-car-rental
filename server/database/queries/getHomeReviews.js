const connection = require('../connection');

const getHomeReviews = () => {
  const sql = {
    text: 'SELECT comment,rate FROM comments WHERE rate >= 4',
  };

  return connection.query(sql);
};
module.exports = { getHomeReviews };
