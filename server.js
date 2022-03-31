const express   = require('express');

require('dotenv').config()

const app       = express();

const http = require('http');
const bodyParser = require('body-parser');

const accounts = require('./routes/accounts')

app.use(bodyParser.json())                                    
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/accounts', accounts)

var httpServer = http.createServer(app)

httpServer.listen(process.env.API_SERVER_PORT,() => {
    console.log('HTTP Server running on port 3030 . 啟動成功')
})