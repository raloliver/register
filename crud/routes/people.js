const express = require('express')

const peopleRouter = ({ connection }) => {
    const router = express.Router()
    router.get('/', (req, res) => {
        connection.query('select * from person', (err, people) => {
            res.send(people)
        })
    })

    return router
}


module.exports = peopleRouter