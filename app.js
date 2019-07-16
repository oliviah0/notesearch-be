const express = require('express');

const ExpressError = require('./helpers/ExpressError');
const morgan = require('morgan');

const app = express();

const SearchEngine = require('./api/invIndex');

app.use(morgan('tiny'));

app.get('/api/search', function(req, res, next) {
  try {
    const { words } = req.query;
    
    // Didn't provide a search word
    if (!words) return res.json({message: "Need key 'words' in query string"});

    const results = SearchEngine.searchWords(words);

    return res.json({results});
  } catch(err) {
    return next(err);
  }
})

/** 404 handler */
app.use(function (req, res, next) {
  const err = new ExpressError('Not Found', 404);
  return next(err);
});

/** General error handler */
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  console.error(err.stack);

  return res.json({
    status: err.status,
    message: err.message
  });
});

module.exports = app;