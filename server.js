/** Start server for note search */

const app = require('./app');
const { PORT } = require('./config');

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`)
});