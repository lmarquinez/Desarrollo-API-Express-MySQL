var express = require('express');
var router = express.Router();

/* Telling the router to use the `/inmuebles` route to access the `inmuebles` module. */
router.use('/post', require('./api/post.js'));

/* Telling the router to use the `/new` route to access the `new.js` module. */
router.use('/author', require('./api/author.js'));


module.exports = router;
