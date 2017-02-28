const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const Articles = require('./server/models/Articles');
const Users = require('./server/models/Users');
const TempUsers = require('./server/models/TempUsers');
const mongoose = require('mongoose');

const app = express();
const api = require('./server/routes/api');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://ec2-52-40-207-198.us-west-2.compute.amazonaws.com:27017/flavors-of-sound");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../front-end/dist')));

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../front-end/dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));
