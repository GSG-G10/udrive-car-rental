/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const { dbBuild } = require('../database/config/build');

const connection = require('../database/connection');

beforeAll(() => dbBuild());

afterAll(() => connection.end());

test('get cars end point with 200 status', (done) => {
  request(app)
    .get('/api/v1/cars')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err) => {
      if (err) return done(err);
      return done();
    });
});
