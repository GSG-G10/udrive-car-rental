/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const { dbBuild } = require('../database/config/bulid');
const connection = require('../database/connection');

beforeEach(() => dbBuild());
describe('Cars', () => {
  test('get carDetails returns a status code of 200', (done) => {
    request(app)
      .get('/api/v1/cars/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const expected = {
          data: [
            {
              id: 1,
              name: '2020 Tesla Model 3',
              door: 4,
              types_id: 1,
              brands_id: 1,
              release_year: 2020,
              gearbox: 'Helical gearbox.',
              price: 150,
              seats: 5,
              img_car: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-tesla-model-3-101-1574807022.jpg?crop=0.745xw:0.610xh;0.0208xw,0.387xh&resize=1200:*',
              description: 'Tesla has singlehandedly changed the electric-car landscape, and the Model 3 is the least expensive way to get one of the companys tech wonders in your driveway.',
              color: 'black',
              type: 'Seden',
              brand: 'Tesla',
              rate: '5.0000000000000000',
            },
          ],
        };
        const actual = res.body;
        expect(actual).toEqual(expected);
        return done();
      });
  });
});

afterAll(() => connection.end());
