/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const { dbBuild } = require('../database/config/bulid');
const connection = require('../database/connection');

beforeEach(() => dbBuild());

test('post admin cars code of status code 200', (done) => {
  request(app)
    .post('/api/v1/brand')
    .set('Cookie', [
      'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhd2FuZGdhcmFkaDEyMzRAR21haWwuY29tIiwiaWQiOjEsInVzZXJuYW1lIjpmYWxzZSwiaXNBZG1pbiI6IlJhd2FuZCIsImlhdCI6MTYzNTE0NjA4OX0.KjaBy8lthnA0j_x1t9CFKK6f-1CguESDwEufsAC7LNE',
    ])
    .send({
      name: 'bmw22',
      image: 'hhh',
    })
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.message).toBe('successfully post brand');
      return done();
    });
});

afterAll(() => connection.end());
