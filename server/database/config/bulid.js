const { readFileSync } = require('fs');
const { join } = require('path');

const connection = require('../connection');

const dbBuild = () => {
  const sqlfake = readFileSync(join(__dirname, 'fakeData.sql')).toString();
  const sql = readFileSync(join(__dirname, 'build.sql')).toString();
  return connection.query(sql).then(() => connection.query(sqlfake));
};
module.exports = { dbBuild };
