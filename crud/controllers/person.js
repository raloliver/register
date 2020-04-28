const personModel = require('../models/person')
// controller: get from somewhere and send to another where with something inside
const index = async (connection, req, res) => {
    const results = await personModel.findAll(connection)
    res.render('person/index', { people: results })
}

const deleteOne = async (connection, req, res) => {
    await personModel.deleteOne(connection, req.params.id)
    res.redirect('/person')
}

const renderCreate = (req, res) => {
    res.render('person/create')
}

const create = async (connection, req, res) => {
    await personModel.create(connection, req.body)
    res.redirect('/person')
}

const renderEdit = async (connection, req, res) => {
    const person = await personModel.findOne(connection, req.params.id)
    res.render('person/edit', { person })
}

const edit = async (connection, req, res) => {
    await personModel.edit(connection, req.params.id, req.body)
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