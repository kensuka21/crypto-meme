const Like = require('../models/Like');

function init(io) {
  io.of('/likes')
    .on('connection', socket => {
      socket.on('newLike', gif => {
        const like = new Like({
          ipAddress: socket.request.connection.remoteAddress,
          gif: gif
        });
        like.save();

        socket.broadcast.emit('addLike');
        socket.emit('addLike');
      });
    });
};

module.exports = init;
