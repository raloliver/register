const express = require('express')
const personControl = require('../controllers/person')

const personRouter = ({ connection }) => {
    const router = express.Router()
    // investigate more about this approach
    router.get('/', personControl.index.bind(null, connection))
    router.get('/delete/:id', personControl.deleteOne.bind(null, connection))
    router.get('/create', personControl.renderCreate)
    router.post('/create', personControl.create.bind(null, connection))
    router.get('/edit/:id', personControl.renderEdit.bind(null, connection))
    router.post('/edit/:id', personControl.edit.bind(null, connection))

    return router
}

module.exports = personRouter