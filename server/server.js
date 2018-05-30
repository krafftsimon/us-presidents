const express = require('express');
const path = require('path');

const app = express();
const api = require('./api');


//app.get('*.js', (req, res, next) => {
//  if (req.url.substring(0,15) === '/static/js/main') {
//    req.url = req.url + '.gz';
//    res.set('Content-Encoding', 'gzip');
//    res.set('Content-Type', 'application/javascript');
//    next();
//  }
//})

// Serve static files.
app.use(express.static(path.join(__dirname, '../build')));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

// Load api routes.
app.use('/api', api);

// Return other routes to React index file..
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});


const port = '4700';

app.set('port', port);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
