const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const mongoose = require('mongoose');
const api = require('./src/server/routes');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://localhost/cryptomeme');

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/gifs', express.static(__dirname + '/src/server/gifs'));
app.use(express.static(__dirname + '/dist'));
app.use(api);
// app.use('/', router);

server.listen(3000);