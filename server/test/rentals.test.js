/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const { dbBuild } = require('../database/config/build');

const connection = require('../database/connection');

beforeAll(() => dbBuild());
afterAll(() => connection.end());

const { TOKEN } = process.env;

test('delete rental by rental id ', (done) => {
  request(app)
    .delete('/api/v1/rentals/1')
    .set('Cookie', [`token=${TOKEN}`])
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.message).toBe('rental deleted successfully !');
      return done();
    });
});
