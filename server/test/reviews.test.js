/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const { dbBuild } = require('../database/config/build');
const connection = require('../database/connection');

const { TOKEN } = process.env;

beforeEach(() => dbBuild());

test('get car reviews returns 200', (done) => {
  request(app)
    .get('/api/v1/reviews/1')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.message).toBe('Reviews retuern successfully');
      return done();
    });
});

test('add new review returns 201', (done) => {
  request(app)
    .post('/api/v1/reviews/1')
    .set('Cookie', [`token= ${TOKEN}`])
    .send({
      comment: 'bmw',
      rate: 5,
    })
    .expect(201)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.message).toBe('Review submitted successfully');
      return done();
    });
});

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
