const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
  ipAddress: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Like', LikeSchema);