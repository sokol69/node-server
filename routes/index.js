var express = require('express');
var router = express.Router();

const ctrlHome = require('../controllers/homepage');
const ctrlWorks = require('../controllers/WorksPage');

/* GET home page. */
router.get('/', ctrlHome.getIndex);
router.post('/contact', ctrlHome.sendEmail);

router.get('/works', ctrlWorks.getWorks);

module.exports = router;
