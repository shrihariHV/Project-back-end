const connection = require('../db-connection')

exports.getUser =   function(email) {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * from users WHERE email = ?",[email], (err, rows, fields) => {
            if(!err) {
                resolve(rows)
            } else {
                reject(err)
            }
        });
    });  
}

exports.createUser =   function(email, password) {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO users(email, password) VALUES (?, ?);",[email, password], (err, rows, fields) => {
            if(!err) {
                resolve(rows)
            } else {
                reject(err)
            }
        });
    });  
}
