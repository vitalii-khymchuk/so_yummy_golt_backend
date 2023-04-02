const errorHandler = require('./errorHandler')
const paginate = require('./paginate')
const { bodyValidation } = require('./bodyValidation')
const { authenticate } = require('./authenticate')

module.exports = {
  errorHandler,
  paginate,
  bodyValidation,
  authenticate,
}
