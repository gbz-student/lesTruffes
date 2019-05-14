var express = require('express');
var router = express.Router();

/* GET persons page. */
router.get('/', function(req, res, next) {
    res.render('vets', { title: 'Veterinarians' });        //Page title
});

module.exports = router;