const errorHandler = require('./errorHandler')
const paginatedResponse = require('./paginatedResponse')
const { bodyValidation } = require('./bodyValidation')
const { authenticate } = require('./authenticate')

module.exports = {
  errorHandler,
  paginatedResponse,
  bodyValidation,
  authenticate,
}
