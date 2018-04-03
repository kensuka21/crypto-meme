const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
  ipAddress: {
    type: String,
    required: true
  },
  gif: {
    type: String,
    required: true
  },
  createdAt: Date
});

LikeSchema.pre('save', function(next) {
  var self = this;

  self.createdAt = new Date();
  next();
});

module.exports = mongoose.model('Like', LikeSchema);