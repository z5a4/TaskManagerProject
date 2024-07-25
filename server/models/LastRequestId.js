const mongoose = require('mongoose');

const LastRequestIdSchema = new mongoose.Schema({
  collectionName: {
    type: String,
    required: true,
    unique: true
  },
  lastId: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('LastRequestId', LastRequestIdSchema);
