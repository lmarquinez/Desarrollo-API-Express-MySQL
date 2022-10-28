var express = require('express');
var router = express.Router();

/* Telling the router to use the `/inmuebles` route to access the `inmuebles` module. */
router.use('/posts', require('./api/posts.js'));

/* Telling the router to use the `/new` route to access the `new.js` module. */
router.use('/new', require('./api/authors.js'));


module.exports = router;
