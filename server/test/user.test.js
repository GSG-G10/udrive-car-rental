/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const { dbBuild } = require('../database/config/bulid');

const connection = require('../database/connection');

beforeAll(() => dbBuild());

describe('auth tests', () => {
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
        phone: '123',
      })
      .expect(201)
      .expect((response) => expect(response.header['set-cookie'][0].split('=')[0]).toBe('token'))
      .end((err) => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });

  test('test sign up endpoint when there is a validation error', (done) => {
    request(app)
      .post('/api/v1/signup')
      .send({
        name: 'aaamra1',
        password: 'helloworld123',
        email: 'asdsadasdas',
        phone: '123',
      })
      .expect(422)
      .end((err) => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });

  test('test auth/user endpoint', (done) => {
    request(app)
      .get('/api/v1/auth/user')
      .set('Cookie', [`token=${process.env.TOKEN}`])
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.id).toBe(2);
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

  test('test sign up endpoint when the email is used', (done) => {
    request(app)
      .post('/api/v1/signup')
      .send({
        name: 'aaamra1',
        password: 'helloworld',
        email: 'rawandgaradh1234@Gmail.com',
        phone: '123',
      })
      .expect(422)
      .end((err) => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });
});

describe('logout', () => {
  test('get logout returns a status code of 200', (done) => {
    request(app)
      .get('/api/v1/logout')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('logged out successfully');
        return done();
      });
  });
});

afterAll(() => connection.end());
