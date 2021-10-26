/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const { dbBuild } = require('../database/config/bulid');
const connection = require('../database/connection');

beforeEach(() => dbBuild());
afterAll(() => connection.end());

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

test('post login returns a status code of 200', (done) => {
  request(app)
    .post('/api/v1/login')
    .send({ email: 'rawandgaradh12333@Gmail.com', password: '12345' })
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err) => {
      if (err) return done(err);
      return done();
    });
});

test('test sign up endpoint', (done) => {
  request(app)
    .post('/api/v1/signup')
    .send({
      name: 'aaamra1',
      password: 'helloworld',
      email: 'dev.aaamra@gmail.com',
      confirmedPassword: 'helloworld',
      phone: '123',
    })
    .expect(200)
    .expect((response) => expect(response.header['set-cookie'][0].split('=')[0]).toBe('token'))
    .end((err) => {
      if (err) {
        return done(err);
      }
      return done();
    });
});
