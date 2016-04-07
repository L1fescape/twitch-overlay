var express = require('express');
var app = express();
var _ = require('lodash');
var url = require('url');

var port = 8081;

app.use('/', express.static('htdocs'));

// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/htdocs/index.html');
// });

app.listen(port, function() {
  console.log(`App running on port ${port}`);
});
