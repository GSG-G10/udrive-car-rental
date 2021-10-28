const { readFileSync } = require('fs');
const { join } = require('path');

const connection = require('../connection');

const dbBuild = () => {
  const sql = readFileSync(join(__dirname, 'build.sql')).toString();
  const sqlFake = readFileSync(join(__dirname, 'fakeData.sql')).toString();
  return connection.query(sql).then(() => connection.query(sqlFake));
};
if (process.env.NODE_ENV === 'development') {
  dbBuild();
} else {
  module.exports = { dbBuild };
}
