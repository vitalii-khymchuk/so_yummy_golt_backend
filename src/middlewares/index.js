const errorHandler = require('./errorHandler')
const paginate = require('./paginate')
const { bodyValidation } = require('./bodyValidation')
const { authenticate } = require('./authenticate')
const { isValidId } = require('./isValidId')
const { handleFormData } = require('./handleFormData')

module.exports = {
  errorHandler,
  paginate,
  bodyValidation,
  authenticate,
  isValidId,
  handleFormData,
}
