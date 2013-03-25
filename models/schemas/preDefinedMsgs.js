var mongoose = require('mongoose');

var preDefSchema = module.exports = new mongoose.Schema({
  Cid: {
    type: Number,
    required: true,
    index: {unique: true}
  },
  messages: {
    type: String
  }
}, {
  collection: 'preDefMsgs',
  safe: true
});

// methods
