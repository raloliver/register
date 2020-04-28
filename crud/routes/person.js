const express = require('express')
const personControl = require('../controllers/person')

const personRouter = ({ connection }) => {
    const router = express.Router()
    // investigate more about this approach
    router.get('/', personControl.index.bind(null, connection))
    router.get('/delete/:id', personControl.deleteOne.bind(null, connection))
    router.get('/create', personControl.createForm)

    return router
}

module.exports = personRouter