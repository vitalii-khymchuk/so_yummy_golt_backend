const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const swaggerUI = require('swagger-ui-express')
const docs = require('@src/docs')
const { errorHandler } = require('@middlewares')

require('colors')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/', express.static('./public'))

app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(docs))

app.use((req, res) => {
  res.status(404).json({ code: 404, message: 'Not found' })
})

// global error handler
app.use(errorHandler)

module.exports = app
