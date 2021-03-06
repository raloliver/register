const env = require('./.env')
const mysql = require('mysql')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || env.port

// connect with database
const connection = mysql.createConnection({
    host: env.host,
    user: env.user,
    password: env.password,
    database: env.database
})

const person = require('./routes/person')

// export deps
const deps = {
    connection
}

// parser
/**
 * #TODO investigate more about parser and how to do not use it
 */
app.use(bodyParser.urlencoded({ extended: false }))

// static files
app.use(express.static('public'))

// routes
app.get('/', (req, res) => res.render('index'))
app.use('/person', person(deps))

// view engine 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// start server 
app.listen(port, () => console.log('CRUD it is on port', port))
