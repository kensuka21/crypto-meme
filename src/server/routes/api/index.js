const router = require('express').Router();
const likes = require('./likes');

router.use('/likes', likes);

module.exports = router;
