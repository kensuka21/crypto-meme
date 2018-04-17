const Like = require('../models/Like');

function init(io) {
  io.of('/likes')
    .on('connection', socket => {
      socket.on('newLike', like => {
        Like.find(like, (err, likes) => {
          if (likes.length === 0){
            const newLike = new Like(like);
            newLike.save();

            socket.broadcast.emit('addLike');
            socket.emit('addLike');
          }
        });
      });

      socket.on('removeLike', like => {
        Like.deleteMany(like, (err) => {
          if (err) return;

          socket.broadcast.emit('reduceLike');
          socket.emit('reduceLike');
        });
      });
    });
};

module.exports = init;
