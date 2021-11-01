const connection = require('../connection');

const getHomeReviews = () => {
  const sql = {
    text: 'SELECT review,rate FROM reviews WHERE rate >= 4',
  };

  return connection.query(sql);
};
module.exports = { getHomeReviews };
