const express = require('express');
const router = new express.Router();
const SearchEngine = require('../api/invIndex');

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

/** GET - results from search words query  */
router.get('/search', function(req, res, next) {
  try {
    const { words } = req.query;
    
    // Didn't provide a search word
    if (!words) return res.json({message: "Need key 'words' in query string"});

    const results = SearchEngine.searchWords(words);

    return res.json({results});
  } catch(err) {
    return next(err);
  }
});

module.exports = router;
