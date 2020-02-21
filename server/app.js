require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const routes = require('./routes')

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(routes)

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json(err.message || 'internal server error')
})
module.exports = app
