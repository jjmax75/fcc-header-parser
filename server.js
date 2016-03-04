'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');

var app = express();
var port = process.env.PORT || 8080;

app.use('/public', express.static(process.cwd() + '/public'));
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

app.enable('trust proxy'); // get true IP address

routes(app);

app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});
