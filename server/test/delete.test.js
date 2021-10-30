/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const { dbBuild } = require('../database/config/build');
const connection = require('../database/connection');

const { TOKEN } = process.env;
beforeEach(() => dbBuild());

test('delete admin cars code of status code 200', (done) => {
  request(app)
    .delete('/api/v1/admin/cars/2')
    .set('Cookie', [`token= ${TOKEN}`,

    ])
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.message).toBe('car deleted successfully');
      return done();
    });
});

test('delete admin cars code of status code 404', (done) => {
  request(app)
    .delete('/api/v1/admin/cars/1155')
    .set('Cookie', [`token= ${TOKEN}`,
    ])
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.status).toBe(400);
      return done();
    });
});
afterAll(() => connection.end());
