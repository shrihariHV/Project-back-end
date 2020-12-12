const connection = require('../db-connection')

exports.allProducts =   function() {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * from products", (err, rows, fields) => {
            if(!err) {
                resolve(rows)
            } else {
                reject(err)
            }
        });
    });  
}


exports.productDetail =   function(id) {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * from products WHERE id = ?",[id], (err, rows, fields) => {
            if(!err) {
                resolve(rows)
            } else {
                reject(err)
            }
        });
    });  
}

exports.insertProduct =   function(name, price) {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO products(name, price) VALUES (? , ?);",[name, price], (err, rows, fields) => {
            if(!err) {
                resolve(rows)
            } else {
                reject(err)
            }
        });
    });  
}


exports.deleteProduct =   function(id) {
    return new Promise((resolve, reject) => {
        connection.query("DELETE from products WHERE id = ?",[id], (err, rows, fields) => {
            if(!err) {
                resolve(rows)
            } else {
                reject(err)
            }
        });
    });  
}


exports.updateProduct = function(id,fields) {
    return new Promise((resolve, reject) => {
        connection.query("UPDATE products SET name = ?, price = ? WHERE id = ?",[fields['name'], fields['price'],id], (err, rows, fields) => {
            if(!err) {
                resolve(rows)
            } else {
                reject(err)
            }
        });
    });  
}
