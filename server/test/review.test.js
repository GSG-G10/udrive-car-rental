/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const { dbBuild } = require('../database/config/build');
const connection = require('../database/connection');

beforeEach(() => dbBuild());

test('get type returns a status code of 200', (done) => {
  request(app)
    .get('/api/v1/review/1')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.message).toBe('Reviews retuern successfully');
      return done();
    });
});

afterAll(() => connection.end());
