import mysql from "mysql2"

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'nodecomplete',
    password: '0000'
})

module.exports = pool.promise();