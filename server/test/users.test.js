/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');
const connection = require('../database/connection');

describe('Auth End Points', () => {
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
});

afterAll(() => connection.end());
