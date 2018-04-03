const router = require('express').Router();
const Like = require('../../models/Like');

router.get('/', (req, res) => {
  Like.find({}, (err, likes) => {
    return res.json(likes);
  });
});

router.post('/', (req, res) => {
  return res.json(req.body);
});

module.exports = router;
