const { HttpError } = require('@helpers')

const bodyValidation = schema => {
  return (req, res, next) => {
    if (req.body?.jsonData) {
      req.body = JSON.parse(req.body.jsonData)
    }
    const { error } = schema.validate(req.body)
    if (error) {
      next(HttpError(400, error.message))
    }
    next()
  }
}

module.exports = { bodyValidation }
