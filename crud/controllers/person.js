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

const renderForm = (req, res) => {
    res.render('person/create')
}

const create = async (connection, req, res) => {
    await person.create(connection, req.body)
    res.redirect('/person')
}

module.exports = {
    index,
    deleteOne,
    renderForm,
    create
}