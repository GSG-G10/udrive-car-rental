// const request = require('supertest');
// const app = require('../routes');
// const connection = require('../database/connection');
// const { dbBuild } = require('../database/config/bulid');

// beforeEach(() => dbBuild());

// test('post login route', (done) => request(app)
//   .post('/api/v1/login')
//   .expect(200)
//   .expect('Content-Type', /html/)
//   .end((err, res) => {
//     if (err) return done(err);
//     expect(res.rowCount).toBe(5);
//     done();
//   }));

// afterAll(() => connection.end());
