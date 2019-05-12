var express = require('express');
var router = express.Router();

/* GET dogs page. */
router.get('/', function(req, res, next) {
    res.render('dogs', { title: 'Nos truffes à adopter' });        //Page title
});

module.exports = router;