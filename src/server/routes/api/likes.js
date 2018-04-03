const router = require('express').Router();
const Like = require('../../models/Like');

router.get('/', (req, res) => {
  Like.find({}, (err, likes) => {
    return res.json(likes);
  });
});

router.post('/', (req, res) => {
  let like = new Like(req.body);

  like.save();
  return res.json(like);
});

module.exports = router;
