var express = require('express');
var router = express.Router();

var api_accounts = require('../api/api_example');

router.get('/queryAll', (req , res) => {
    api_accounts.queryAll(req,res)
})


module.exports = router;