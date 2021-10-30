/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const { dbBuild } = require('../database/config/build');
const connection = require('../database/connection');

const { TOKEN } = process.env;

beforeAll(() => dbBuild());

describe('Post rentls tests', () => {
  test('Post rentals returns a status code of 200', (done) => {
    request(app)
      .post('/api/v1/rentals/3')
      .set('Cookie', [`token= ${TOKEN}`])
      .send({
        location: 'Gaza',
        pickUpDateTime: '2021-11-27 01:00:00',
        pickOffDateTime: '2021-11-28 01:00:00',
      })
      .expect(201)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(201);
        return done();
      });
  });

  test('Post rentals returns a status code of 400', (done) => {
    request(app)
      .post('/api/v1/rentals/3')
      .set('Cookie', [`token= ${TOKEN}`])
      .send({
        location: 'Gaza',
        pickUpDateTime: '2021-11-27 01:00:00',
        pickOffDateTime: '2021-11-27 01:00:00',
      })
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(400);
        return done();
      });
  });

  test('Post rentals returns a status code of 422', (done) => {
    request(app)
      .post('/api/v1/rentals/3')
      .set('Cookie', [`token= ${TOKEN}`])
      .send({
        location: 'Gaza',
        pickUpDateTime: '2021-11-27 01:00:00',
        pickOffDateTime: '2021-11-27 03:00:00',
      })
      .expect(422)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(422);
        return done();
      });
  });
});

afterAll(() => connection.end());
