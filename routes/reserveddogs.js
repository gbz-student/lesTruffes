var express = require('express');
var router = express.Router();

/* GET reserveddogs page. */
router.get('/', function(req, res, next) {
    res.render('reserveddogs', { title: 'Reserved dogs' });        //Page title
});

module.exports = router;