const env = require('./.env')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: env.host,
    user: env.user,
    password: env.password,
    database: env.database
})

connection.connect((err) => {
    if (err) {
        console.log('OPS! Erro with connect on database');
    } else {
        console.log('Connected...')
    }
})