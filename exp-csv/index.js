const fs = require('fs')
const { getPerson } = require('./../connect');

const stream = fs.createWriteStream('person.csv')

getPerson(stream);

