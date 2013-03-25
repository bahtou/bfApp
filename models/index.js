/*
  List of Models
 */

var mongoose = require('mongoose');

module.exports.Contact = mongoose.model('contacts', require('./schemas/contacts') );
// module.exports.preDefMsg = mongoose.model('preDefMsgs', require('./schemas/preDefinedMsgs') );
module.exports.schMsg = mongoose.model('schMsgs', require('./schemas/scheduledMsgs') );
