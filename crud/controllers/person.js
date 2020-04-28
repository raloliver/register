const index = (connection, req, res) => {
    connection.query('select * from person', (err, people) => {
        res.send(people)
    })
}

module.exports = {
    index
}