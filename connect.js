const env = require('./.env')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: env.host,
    user: env.user,
    password: env.password,
    database: env.database
})


function getPerson(stream) {
    connection.connect(() => {
        stream.write('name,occupation\n')
        const query = connection.query('select * from person')
        query.on('result', (row) => {
            connection.pause()
            const result = row.name + ', ' + row.occupation + '\n'
            setTimeout(() => {
                stream.write(result, () => {
                    connection.resume()
                    console.log(row.id);
                })
            }, 1000)
        });
        query.on('end', () => {
            stream.end()
            connection.end()
        })
    })
}

module.exports = { getPerson };