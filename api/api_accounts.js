const DB = require('../modules/mysql')

const db = new DB();

module.exports = {
    queryAll: function (req, res) {
        db.connect();
        console.log("Call queryAll");
        res.send('queryAll Test OK!');
    },
}