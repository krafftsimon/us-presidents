const express = require('express');
const path = require('path');

const app = express();
const api = require('./api');

// If our bundle.js was gzipped to reduce size,
// this tell the browser that it needs to unzip first. 
/*
app.get('*.js', (req, res, next) => {
  if (req.url.substring(0,15) === '/static/js/main') {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'application/javascript');
    next();
  }
})
*/

// Serve static files.
app.use(express.static(path.join(__dirname, '../build')));

// Adds an exception to CORS mechanism.
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://us-presidents.krafftsimon.com');
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
