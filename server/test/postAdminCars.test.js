/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const { dbBuild } = require('../database/config/bulid');
const connection = require('../database/connection');

beforeEach(() => dbBuild());

test('post admin cars code of status code 200', (done) => {
  request(app)
    .post('/api/v1/admin/cars')
    .set('Cookie', [
      'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhd2FuZGdhcmFkaDEyMzRAR21haWwuY29tIiwiaWQiOjEsInVzZXJuYW1lIjpmYWxzZSwiaXNBZG1pbiI6IlJhd2FuZCIsImlhdCI6MTYzNTE0NjA4OX0.KjaBy8lthnA0j_x1t9CFKK6f-1CguESDwEufsAC7LNE',
    ])
    .send({
      name: 'bmw22',
      door: 1,
      typeId: 1,
      brandId: 1,
      releaseYear: 2020,
      gearbox: 'Coaxial helical inline gearbox',
      price: 100,
      seats: 6,
      imgCar: 'sdasdasdasdasda',
      description: 'description',
      color: 'red',
    })
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.message).toBe('INSERT DATA SUCCESSFULLY');
      return done();
    });
});

afterAll(() => connection.end());
