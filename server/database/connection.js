require('env2')('.env');
const { Pool } = require('pg');

const {
  NODE_ENV, DB_URL, DATABASE_URL, TEST_DB_URL,
} = process.env;
let dburl = '';
switch (NODE_ENV) {
  case 'development':
    dburl = DB_URL;
    break;
  case 'production':
    dburl = DATABASE_URL;
    break;
  case 'test':
    dburl = TEST_DB_URL;
    break;
  default:
    throw new Error('DB Connection Failed');
}
const options = {
  connectionString: dburl,
  ssl: { rejectUnauthorized: false },
};

module.exports = new Pool(options);
