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

const findOne = (connection, id) => {
    return new Promise((resolve, reject) => {
        connection.query('select * from person where id = ' + id, (err, people) => {
            if (err) {
                reject(err)
            } else {
                resolve(people)
            }
        })
    })
}

const deleteOne = (connection, id) => {
    return new Promise((resolve, reject) => {
        // use limit 1 for do not delete all if where fails
        connection.query('delete from person where id = ' + id + ' limit 1', (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

const create = (connection, person) => {
    return new Promise((resolve, reject) => {
        // the value is between simple quotes
        /**
         * #TODO how to return a message?
         */
        connection.query(`insert into person (name, occupation, birthdate) values ('${person.name}', '${person.occupation}', '${person.birthdate}')`, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

module.exports = {
    findAll,
    findOne,
    deleteOne,
    create
}