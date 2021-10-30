/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const { dbBuild } = require('../database/config/build');
const connection = require('../database/connection');

beforeEach(() => dbBuild());
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
              name: 'FerrariSF90Stradale',
              door: 4,
              types_id: 3,
              brands_id: 3,
              release_year: 2021,
              gearbox: 'Bevel helical gearbox.',
              price: 110,
              seats: 4,
              img_car: 'https://carconfigurator.ferrari.com/assets/cars/portofinom/packages/default/car-ferrari-portofino-m_splash.jpg',
              description: 'With three electric motors and a 3.9-liter V8 engine, the new hybrid Ferrari can glide silently through city streets — and reach a top speed of 340 kilometers per hour.',
              color: 'gray',
              type: 'Sports Car',
              brand: 'Ferrai',
              rate: '4.0000000000000000',
              pick_up_date_time: '2021-12-26T23:00:00.000Z',
              pick_of_date_time: '2021-12-27T01:00:00.000Z',
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
});

afterAll(() => connection.end());
