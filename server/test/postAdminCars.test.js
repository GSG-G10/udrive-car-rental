/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

require('env2')('.env');

const { TOKEN } = process.env;

const { dbBuild } = require('../database/config/build');
const connection = require('../database/connection');

beforeEach(() => dbBuild());

test('post admin cars code of status code 201', (done) => {
  request(app)
    .post('/api/v1/admin/cars')
    .set('Cookie', [`token=${TOKEN}`])
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
    .expect(201)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.message).toBe('INSERT DATA SUCCESSFULLY');
      return done();
    });
});

afterAll(() => connection.end());
