const person = require('../models/person')

const index = async (connection, req, res) => {
    const people = await person.findAll(connection)
    res.send(people)
}

module.exports = {
    index
}