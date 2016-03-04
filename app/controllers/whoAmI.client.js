'use strict';

function WhoAmI() {

  this.main = function(req, res) {
    var ip = req.headers["x-forwarded-for"];
    // need to deal with heroku internal routing
    // https://lostechies.com/derickbailey/2013/12/04/getting-the-real-client-ip-address-on-a-heroku-hosted-nodejs-app/
    if (ip){
      var list = ip.split(",");
      ip = list[list.length-1];
    } else {
      ip = req.connection.remoteAddress;
    }

    var language = req.headers["accept-language"];
    var os = req.headers["user-agent"];

    os = os.match(/\((.*)\)/)[1]; // capture OS only, within brackets
    language = language.match(/(.*),/)[1]; // capture language bit before comma
    ip = ip.match(/:(\d.*)/)[1];

    var headerObject = {
      "ipaddress": ip,
      "language": language,
      "software": os
    };

    res.send(headerObject);
  };
}

module.exports = WhoAmI;
