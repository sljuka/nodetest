var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('I AM BORN IN World!');
});

var server = app.listen(3000, function () {
  console.log('Example app listening at http://%s:%s', server.address().address, server.address().port);
});