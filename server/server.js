const path = require('path')
const express = require('express')
const cors = require('cors')

const db = require('./config/db.config.js');

global.__basedir = __dirname;  

const server = express()

let fileRoutes = require('./routers/excel.router.js');

//Middlewate
server.use(cors())
server.use(express.json())
server.use(express.static('resources'));
server.use(express.static(path.join(__dirname, './public')))

//Routes
server.use('/', fileRoutes);

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

// Somehow need to fix this.....
// //What does this do?
global.__basedir = __dirname;   
// //force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with { force: true }');
  }); 

module.exports = server