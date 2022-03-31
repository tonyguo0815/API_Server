var express = require('express');
var router = express.Router();

var api_accounts = require('../api/api_accounts');

router.get('/queryAll', (req , res) => {
    api_accounts.queryAll(req,res)
})


module.exports = router;