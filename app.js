var express = require('express')
  , app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/body', function (req, res) {
  res.status(200).send({message: 'hi this is a message', createdBy: 'User Test'});
});

module.exports = exports = app;
