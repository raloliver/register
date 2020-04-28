const findAll = (connection) => {
    return new Promise((resolve, reject) => {
        connection.query('select * from person', (err, people) => {
            if (err) {
                reject(err)
            } else {
                resolve(people)
            }
        })
    })
}

module.exports = {
    findAll
}