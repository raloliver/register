const env = require('./.env')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: env.host,
    user: env.user,
    password: env.password,
    database: env.database
})


async function getPerson(stream) {
    await connection.connect((err) => {
        const query = connection.query('select * from person')
        query.on('result', (row) => {
            stream.write(JSON.stringify(row))
        });
        query.on('end', () => {
            stream.end()
            connection.end()
        })
    })
}

module.exports = { getPerson };