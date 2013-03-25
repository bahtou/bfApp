var controllers = require("../controllers")
  , contact = controllers.Contact
  , preDefMsg = controllers.PreDefMsg;
//   , schMsg = controllers.SchMsg;

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index', {title: 'The BF App'});
  });

  app.post('/addContact', contact.create);
  app.get('/contact/:id/msgs', contact.showMsgs);
  app.post('/contact/:id/addMsg', contact.addMsg);
  app.get('/contact/:id/schedule', contact.schedule);

};
