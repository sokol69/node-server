var express = require('express');
var router = express.Router();

const ctrlHome = require('../controllers/homepage');

/* GET home page. */
router.get('/', ctrlHome.getIndex);

module.exports = router;
