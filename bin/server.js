'use strict'

const cors = require('./cors')
const restify = require('restify')
const app = restify.createServer()
const routes = require('../src/routes/api')

// CORS
app.pre(cors.preflight)
app.use(cors.actual)

// Restify
app.use(restify.plugins.acceptParser(app.acceptable))
app.use(restify.plugins.queryParser())
app.use(restify.plugins.bodyParser())

// Carrega todas as rotas
routes(app)

module.exports = app
