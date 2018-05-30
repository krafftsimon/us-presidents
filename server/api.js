const express = require('express');
const ascUsPresident = require('./asc-us-presidents-list');
const descUsPresident = require('./desc-us-presidents-list');

const router = express.Router();

router.get('/us-presidents', function(req, res) {
  const sortOrder = req.query.order
  if (!sortOrder) {
    return res.status(422).send('Please specify a sorting order.');
  }
  if (sortOrder !== 'asc' && sortOrder !== 'desc') {
    return res.status(422).send('Please specify a valid sorting order (asc or desc).')
  }
  res.send({
    "usPresidents": sortOrder === 'asc' ? ascUsPresident : descUsPresident,
  });
})

module.exports = router;
