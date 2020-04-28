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

const renderCreate = (req, res) => {
    res.render('person/create')
}

const create = async (connection, req, res) => {
    await person.create(connection, req.body)
    res.redirect('/person')
}

const renderEdit = async (connection, req, res) => {
    const result = await person.findOne(connection, req.params.id)
    res.render('person/edit', { result })
}

const edit = async (connection, req, res) => {
    await person.create(connection, req.body)
    res.redirect('/person')
}

module.exports = {
    index,
    deleteOne,
    renderCreate,
    create,
    renderEdit,
    edit
}