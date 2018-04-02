import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';

// import router from './routes/index';
let app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/gifs', express.static(__dirname + '/gifs'));
// app.use('/', router);

app.listen(3000, function() {
});