/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const { dbBuild } = require('../database/config/bulid');
const connection = require('../database/connection');

beforeAll(() => dbBuild());

describe('Types tests', () => {
  test('get type returns a status code of 200', (done) => {
    request(app)
      .get('/api/v1/type')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.length).toBe(5);
        return done();
      });
  });
});

afterAll(() => connection.end());
