var Contact = require('../models').Contact
  , moment = require('moment');

module.exports.create = function( req, res ) {
  var data = req.body, num;
  num = data.contactPhone.replace(/-/g,'');

  var contact = new Contact({
    name: data.contactName,
    phone: +num
  });

  console.log('contact', contact);
  contact.save(function(err, data) {
    if (err) return res.send("contact create error: " + err);
    console.log("create data: ", data);
    res.redirect('/contact/' + data._id + '/msgs');
  });
};

module.exports.showMsgs = function(req, res) {
  var id = req.params.id;
  Contact.findById(id, function( err, info) {
    if (err) return res.send("contact create error: " + err);

    console.log("showMsgs info", info);
    res.render('contactMsgs', {
      title: 'The BF App',
      contact: info
    });
  });
};

module.exports.addMsg = function(req, res) {
  var id = req.params.id;
  Contact.findById(id, function(err, info) {
    if (err) return res.send("contact create error: " + err);

    // add the message to the contacts messages
      Contact.findByIdAndUpdate(info._id, {$push: {"messages": {title: req.body.title, msg: req.body.msg}}}, {upsert: true}, function(err, numAffected, rawResponse) {
      if (err) return res.send("contact addMsg error: " + err);

      res.redirect('/contact/'+ info._id +'/msgs');
    });
  });
};

module.exports.schedule = function(req, res) {
  var id = req.params.id;
  
};
