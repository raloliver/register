const person = require('../models/person')
// controller: get from somewhere and send to another where with something inside
const index = async (connection, req, res) => {
    const people = await person.findAll(connection)
    res.render('people/index')
}

module.exports = {
    index
}