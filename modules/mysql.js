const mysql = require('mysql');

require('dotenv').config()

class DB {
    constructor() {
        this.establishedConnection = null;
    }

    connection() {
        return new Promise((resolve, reject) => {
            resolve(mysql.createConnection({
                host: process.env.DB_SERVER_HOST,
                user: process.env.DB_SERVER_USER,
                password: process.env.DB_SERVER_PASSWORD,
                database: process.env.DB_SERVER_DATABASE,
            }))
        })
    }
  
    connect() {
        if (!this.establishedConnection) {
            this.establishedConnection = this.connection().then(res => {
                res.connect(function(err) {
                    if (err) {
                        this.dropConnection();
                        throw err;
                    }

                    console.log(res.state, "connected")
                })
            });
        }
    }

    dropConnection() {
        if (this.establishedConnection) {
            this.establishedConnection.then(res => {
                res.end();
                console.log(res.state, 'connection dropped');
            })

            this.establishedConnection = null;
        }
    }
}

module.exports = DB;
