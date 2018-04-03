import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import http from 'http';

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/gifs', express.static(__dirname + '/src/server/gifs'));
app.use(express.static(__dirname + '/dist'));
// app.use('/', router);

server.listen(3000);