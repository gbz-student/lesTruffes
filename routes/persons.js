var express = require('express');
var router = express.Router();

/* GET persons page. */
router.get('/', function(req, res, next) {
    res.render('persons', { title: 'Persons' });        //Page title
});

module.exports = router;