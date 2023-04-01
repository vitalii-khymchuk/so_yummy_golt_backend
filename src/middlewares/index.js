const errorHandler = require('./errorHandler')
const { bodyValidation } = require('./bodyValidation')
const { authenticate } = require('./authenticate')

module.exports = {
  errorHandler,
  bodyValidation,
  authenticate,
}
