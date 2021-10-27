require('env2')('.env');
/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const { dbBuild } = require('../database/config/bulid');
const connection = require('../database/connection');

const { TOKEN } = process.env;
beforeEach(() => dbBuild());

test('post admin cars code of status code 200', (done) => {
  request(app)
    .delete('/api/v1/admin/Car/2')
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

afterAll(() => connection.end());
