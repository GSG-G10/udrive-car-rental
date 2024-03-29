require('env2')('.env'); // we need this to bulid database out of app.js file
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
  ssl: NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
};

module.exports = new Pool(options);
