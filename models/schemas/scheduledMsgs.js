var mongoose = require('mongoose');

var scheduleSchema = module.exports = new mongoose.Schema({
  Mid: {
    type: Number,
    required: true,
    index: {unique: true}
  },
  scheduled: {
    type: Date
  }
}, {
    collection: 'schMsgs',
    safe: true
});

// methods
