const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const swaggerUI = require('swagger-ui-express')
const docs = require('@src/docs')
const { errorHandler } = require('@middlewares')
const {
  authRouter,
  recipesRouter,
  ingredientsRouter,
  recipePagesRouter,
  categoryListRouter,
} = require('@routes/api')

require('colors')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(express.urlencoded({ extended: true }))
app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/', express.static('./public'))
app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(docs))

app.use('/api/v1', authRouter)
app.use('/api/v1', recipePagesRouter)
app.use('/api/v1', categoryListRouter)
app.use('/api/v1', recipesRouter)
app.use('/api/v1', ingredientsRouter)

app.use((req, res) => {
  res.status(404).json({ code: 404, message: 'Not found' })
})

// global error handler
app.use(errorHandler)

module.exports = app
