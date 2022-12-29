var express = require('express');
var router = express.Router();
const quotesController = require('../controllers/QuoteController')


router.get('/newQuote/:quote', quotesController.getQuote)


module.exports = router;