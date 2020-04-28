const express = require('express')

const peopleRouter = (deps) => {
    const router = express.Router()
    router.get('/', (req, res) => res.send('People'))

    return router
}


module.exports = peopleRouter