const express = require('express')
const router = express.Router()
const db = require('../db/invoices')

module.exports = router

//GET Invoices 
router.get('/invoices', (req, res) => {
  db.getInvoices()
    .then(invoices => res.json({invoices: invoices}))
    .catch(err => {
        res.status(500).send('something went wrong')
  })
})