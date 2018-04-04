const Like = require('../models/Like');

function init(io) {
  io.of('/likes')
    .on('connection', socket => {
      socket.on('newLike', gif => {
        Like.find({
          ipAddress: socket.request.connection.remoteAddress,
          gif: gif
        }, (err, likes) => {
          if (likes.length === 0){
            const like = new Like({
              ipAddress: socket.request.connection.remoteAddress,
              gif: gif
            });
            like.save();

            socket.broadcast.emit('addLike');
            socket.emit('addLike');
          }
        });
      });
    });
};

module.exports = init;
