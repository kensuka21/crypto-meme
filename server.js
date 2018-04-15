const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const mongoose = require('mongoose');
const api = require('./src/server/routes');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

require('./src/server/socket')(io);
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/cryptomeme');

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/gifs', express.static(__dirname + '/src/server/gifs'));
app.use(express.static(__dirname + '/dist'));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(api);
// app.use('/', router);

server.listen(3000, '0.0.0.0');