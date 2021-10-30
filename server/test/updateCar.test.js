/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const { dbBuild } = require('../database/config/build');
const connection = require('../database/connection');

const { TOKEN } = process.env;

beforeEach(() => dbBuild());

test('update car data of status code 200', (done) => {
  request(app)
    .put('/api/v1/update/car/4')
    .set('Cookie', [`token= ${TOKEN}`])
    .send({
      name: 'BMW',
      door: 18,
      typesId: 5,
      brandsId: 2,
      releaseYear: 2020,
      gearbox: 'Coaxial helical inline gearbox',
      price: 100,
      seats: 7,
      imgCar: 'www.asdasdas.com',
      description: 'blah blah blah',
      color: 'red',
    })
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.msg).toBe('Update Car Successfully');
      return done();
    });
});

afterAll(() => connection.end());
