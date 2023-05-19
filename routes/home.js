const express = require('express');
const router = express.Router()
var https = require('https');

router.get('/', function (req, res) {
  return res.render("home", {})
});

module.exports = router;