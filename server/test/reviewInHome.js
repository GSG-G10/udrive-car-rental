/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const { dbBuild } = require('../database/config/build');
const connection = require('../database/connection');

beforeAll(() => dbBuild());

test('show review in home returns a status code of 200', (done) => {
  request(app)
    .get('/api/v1/reviewHome')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.message).toBe('Reviews retuern in home successfully');
      return done();
    });
});

afterAll(() => connection.end());
