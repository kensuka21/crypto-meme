const Like = require('../../models/Like');
const router = require('express').Router();

router.get('/:crypto/:email/gif/:gif', (req, res) => {
  Like.find({
    gif: req.params.gif,
    crypto: req.params.crypto,
    email: req.params.email
  })
    .sort({_id: -1})
    .limit(1)
    .exec((err, likes) => {
      if (!likes || likes.length === 0) {
        return res.sendStatus(400);
      }

      return res.json(likes[0]);
    });
});

router.get('/:crypto/gif/:gif/count', (req, res) => {
  Like.find({ crypto: req.params.crypto, gif: req.params.gif }, (err, likes) => {
    return res.json(likes.length);
  });
});

module.exports = router;
