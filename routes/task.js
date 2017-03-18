var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/task', function(req, res, next) {
  res.send('ini task saya');
});

module.exports = router;
