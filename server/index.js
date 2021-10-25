const app = require('./app');

app.listen(app.get('PORT'), () => {
  // eslint-disable-next-line no-console
  console.log(`Server in listening at http://localhost:${app.get('PORT')}`);
});
