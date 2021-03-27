const path = require('path')
const express = require('express')

const db = require('./config/db.config.js');

global.__basedir = __dirname;  

const server = express()

let router = require('./routers/excel.router.js');

server.use('/', router);
server.use(express.static('resources'));

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

// Somehow need to fix this.....
// //What does this do?
// global.__basedir = __dirname;   
// //force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with { force: true }');
  }); 

module.exports = server