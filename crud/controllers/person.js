const person = require('../models/person')
// controller: get from somewhere and send to another where with something inside
const index = async (connection, req, res) => {
    const results = await person.findAll(connection)
    res.render('person/index', { people: results })
}

const deleteOne = async (connection, req, res) => {
    await person.deleteOne(connection, req.params.id)
    res.redirect('/person')
}

const createForm = (req, res) => {
    res.render('person/create')
}

module.exports = {
    index,
    deleteOne,
    createForm
}