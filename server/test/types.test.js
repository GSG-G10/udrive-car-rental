/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const { dbBuild } = require('../database/config/build');
const connection = require('../database/connection');

const { TOKEN } = process.env;

beforeEach(() => dbBuild());

test('post admin cars code of status code 200', (done) => {
  request(app)
    .post('/api/v1/admin/types')
    .set('Cookie', [`token=${TOKEN}`])
    .send({
      name: 'Seden',
      image:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=980:*',
    })
    .expect(201)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.message).toBe('successfully post type');
      return done();
    });
});

test('DELETE admin type code of status code 200', (done) => {
  request(app)
    .delete('/api/v1/admin/types/2')
    .set('Cookie', [`token= ${TOKEN}`])
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.message).toBe('Car Type Deleted Successfully');
      return done();
    });
});

afterAll(() => connection.end());
