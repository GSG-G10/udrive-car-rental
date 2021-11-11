/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const { dbBuild } = require('../database/config/build');

const connection = require('../database/connection');

const { TOKEN } = process.env;

beforeAll(() => dbBuild());

afterAll(() => connection.end());

describe('Cars', () => {
  test('get carDetails returns a status code of 200', (done) => {
    request(app)
      .get('/api/v1/cars/3')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const expected = {
          data: [
            {
              id: 3,
              name: 'BMW M4 CS',
              door: 4,
              type_id: 6,
              brand_id: 2,
              release_year: 2019,
              gearbox: 'Manual gearbox',
              price: 50,
              seats: 5,
              img_car: 'https://mediapool.bmwgroup.com/cache/P9/201705/P90261088/P90261088-bmw-m4-cs-san-marino-blue-metallic-05-2017-2250px.jpg',
              description: 'Now that we’ve learned to live with the mighty grille (well, some of us anyway), it’s time to focus on something other than the pair of XXL kidneys',
              color: 'Blue',
              type: 'Coupe',
              brand: 'BMW',
              rate: null,
            },
          ],
        };
        const actual = res.body;
        expect(actual).toEqual(expected);
        return done();
      });
  });

  test('get carDetails returns a status code of 400', (done) => {
    request(app)
      .get('/api/v1/cars/-1')
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(400);
        return done();
      });
  });

  test('get cars end point with 200 status', (done) => {
    request(app)
      .get('/api/v1/cars')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });

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

  test('get car name returns a status code of 200', (done) => {
    request(app)
      .get('/api/v1/admin/cars')
      .set('Cookie', [`token= ${TOKEN}`])
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('give car successfully');
        return done();
      });
  });

  test('update car data of status code 200', (done) => {
    request(app)
      .put('/api/v1/admin/cars/4')
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

  test('delete admin cars code of status code 200', (done) => {
    request(app)
      .delete('/api/v1/admin/cars/2')
      .set('Cookie', [`token= ${TOKEN}`])
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('car deleted successfully');
        return done();
      });
  });

  test('delete admin cars code of status code 404', (done) => {
    request(app)
      .delete('/api/v1/admin/cars/1155')
      .set('Cookie', [`token= ${TOKEN}`])
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(400);
        return done();
      });
  });
});
