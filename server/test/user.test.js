/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const { dbBuild } = require('../database/config/bulid');
const connection = require('../database/connection');

beforeEach(() => dbBuild());

describe('login', () => {
  test('post login returns a status code of 200', (done) => {
    request(app)
      .post('/api/v1/login')
      .send({ email: 'rawandgaradh1234@Gmail.com', password: '12345678' })
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('logged in successfully');
        return done();
      });
  });

  test('post login returns a status code of 400', (done) => {
    request(app)
      .post('/api/v1/login')
      .send({ email: 'rawandgaradh1234@Gmail.com', password: '12345' })
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });

  test('test auth/user endpoint', (done) => {
    request(app)
      .get('/api/v1/auth/user')
      .set('Cookie', ['token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlJhd2FuZCIsImVtYWlsIjoicmF3YW5kZ2FyYWRoMTIzNEBHbWFpbC5jb20iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNTE2MjM5MDIyfQ.sJeNAAtPPgPmiHMxK8wvMXetBaYezyvgIomsXQQSdZU'])
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.id).toBe(1);
        return done();
      });
  });

  test('test auth/user endpoint when there is no token', (done) => {
    request(app)
      .get('/api/v1/auth/user')
      .expect(401)
      .expect('Content-Type', /json/)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});
afterAll(() => connection.end());
