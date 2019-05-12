var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Association Une truffe et des pattes' });        //Page title
});

module.exports = router;