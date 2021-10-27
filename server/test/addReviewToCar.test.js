require('env2')('.env');
/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const { dbBuild } = require('../database/config/bulid');
const connection = require('../database/connection');

const { TOKEN } = process.env;
beforeEach(() => dbBuild());

test('post rentals history reviews :rentalsId code of status code 200', (done) => {
  request(app)
    .post('/api/v1/rentals/history/reviews/1')
    .set('Cookie', [`token= ${TOKEN}`])
    .send({
      comment: 'bmw',
      rate: 5,
    })
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.message).toBe('Review submitted successfully');
      return done();
    });
});

afterAll(() => connection.end());
