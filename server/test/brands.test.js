/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const { dbBuild } = require('../database/config/build');

const connection = require('../database/connection');

const { TOKEN } = process.env;

beforeAll(() => dbBuild());

afterAll(() => connection.end());

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
