const person = require('../models/person')
// controller: get from somewhere and send to another where with something inside
const index = async (connection, req, res) => {
    const results = await person.findAll(connection)
    res.render('person/index', { people: results })
}

module.exports = {
    index
}