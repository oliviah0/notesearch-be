const express = require('express');
const router = new express.Router();
const SearchEngine = require('../api/invIndex');
const ExpressError = require('../helpers/ExpressError');

/** GET - hit this API to turn on the heroku backend server */
router.get('/', function(req, res, next) {
  try {
    // Returns a key with loaded, signifying heroku has loaded the server api
    const loaded = true;
    return res.json({loaded});
  } catch (err) {
    return next(err);
  }
});

/** GET - random question */
router.get('/random', function(req, res, next) {
  try {
    const results = SearchEngine.random();
    return res.json({results});
  } catch(err) {
    return next(err);
  }
});

/** GET - results from search words query  */
router.get('/search', function(req, res, next) {
  try {
    const { words } = req.query;
    
    // Didn't provide a search word
    if (!words) {
      let message = "Need key 'words' in query string";
      return next(new ExpressError(message, 400));
    }

    const results = SearchEngine.searchWords(words);

    return res.json({results});
  } catch(err) {
    return next(err);
  }
});

module.exports = router;

