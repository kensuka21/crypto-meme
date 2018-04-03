const likesSocket = require('./likes');

module.exports = function(io) {
  likesSocket(io);
};
