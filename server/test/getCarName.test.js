/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const { dbBuild } = require('../database/config/build');
const { TOKEN } = process.env;

const connection = require('../database/connection');

beforeEach(() => dbBuild());

test('get car name returns a status code of 200', (done) => {
  request(app)
    .get('/api/v1/car/name')
    .set('Cookie', [`token= ${TOKEN}`])

    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.message).toBe('give car successfully');
      return done();
    });
});

afterAll(() => connection.end());
