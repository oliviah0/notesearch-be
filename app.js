const express = require('express');
const ExpressError = require('./helpers/ExpressError');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const apiRoutes = require('./routes/apiRoutes');

app.use(cors());
app.use(morgan('tiny'));
app.use('/api', apiRoutes);

/** 404 handler */
app.use(function (req, res, next) {
  const err = new ExpressError('URL Not Found', 404);
  return next(err);
});

/** General error handler */
app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  if (process.env.NODE_ENV !== 'test') console.error(err.stack);

  return res.json({
    status: err.status,
    message: err.message
  });
});

module.exports = app;