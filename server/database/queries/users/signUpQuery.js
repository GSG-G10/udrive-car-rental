const connection = require('../../connection');

const signUpQuery = (name, email, password, phone) => {
  const sql = {
    text: 'INSERT INTO users(name, email, password, phone) VALUES($1,$2,$3,$4) RETURNING *',
    values: [name, email, password, phone],
  };

  return connection.query(sql);
};

module.exports = signUpQuery;
