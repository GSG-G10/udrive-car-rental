/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const { dbBuild } = require('../database/config/build');

const connection = require('../database/connection');

const { TOKEN } = process.env;

beforeAll(() => dbBuild());
afterAll(() => connection.end());

describe('test pending and history rentals', () => {
  test('pending rentals', (done) => {
    request(app)
      .get('/api/v1/rentals')
      .set('Cookie', [`token= ${TOKEN}`])
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });

  test('history rentals', (done) => {
    request(app)
      .get('/api/v1/rentals/history')
      .set('Cookie', [`token= ${TOKEN}`])
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});
