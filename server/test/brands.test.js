/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const { dbBuild } = require('../database/config/build');

const connection = require('../database/connection');

const { TOKEN } = process.env;

beforeAll(() => dbBuild());

afterAll(() => connection.end());

test('get brands returns a status code of 200', (done) => {
  request(app)
    .get('/api/v1/brands')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.data.length).toBe(7);
      return done();
    });
});

test('add new brand returns 201', (done) => {
  request(app)
    .post('/api/v1/admin/brands')
    .set('Cookie', [`token= ${TOKEN}`])
    .send({
      name: 'bmw',
      image: 'data:image/jpeg;base64,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',
    })
    .expect(201)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.message).toBe('successfully post brand');
      return done();
    });
});

test('delete brand by brand id ', (done) => {
  request(app)
    .delete('/api/v1/admin/brands/1')
    .set('Cookie', [`token=${TOKEN}`])
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.message).toBe('Brand deleted successfully !');
      return done();
    });
});

test('delete brand by brand id, return 400 statusCode ', (done) => {
  request(app)
    .delete('/api/v1/admin/brands/10')
    .set('Cookie', [`token=${TOKEN}`])
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.message).toBe('Some thing went wrong !');
      return done();
    });
});
