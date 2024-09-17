import mysql from 'mysql2/promise'

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'almant',
    database:'photostudio',
    waitForConnections: true
})

export default db;