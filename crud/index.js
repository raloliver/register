const env = require('./.env')
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || env.port

// static files
app.use(express.static('public'))

// routes
app.get('/', (req, res) => res.render('index'))

// view engine 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// start server 
app.listen(port, () => console.log('CRUD it is on port', port))
