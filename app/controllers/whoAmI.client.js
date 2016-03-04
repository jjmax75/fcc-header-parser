'use strict';

function WhoAmI() {

  this.main = function(req, res) {
    var ip = req.ip;
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
