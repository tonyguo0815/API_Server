const DB = require('../modules/mysql')

module.exports = {
    queryAll: function (req, res) {
        DB.actionDB(res, 'show tables');
    },
}