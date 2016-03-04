'use strict';

var WhoAmI = require(process.cwd() + '/app/controllers/whoAmI.client.js');

module.exports = function(app) {

  var whoAmI = new WhoAmI();

  app.route('/')
    .get(function(req, res) {
      res.sendFile(process.cwd() + '/public/index.html');
    });

  app.route('/whoami')
    .get(whoAmI.main);
};
