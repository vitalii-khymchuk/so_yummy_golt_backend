const { isValidObjectId } = require('mongoose')

const { HttpError } = require('@helpers')

/**
 * isValidId - Checks whether param(s) is valid ObjectId
 * @param  {...string} params
 * @returns {(req, res, next) => void}
 */
const isValidId = (...params) => {
  params.length === 0 && params.push('id')
  return (req, res, next) => {
    for (const param of params) {
      const id = req.params[param]
      if (!isValidObjectId(id)) {
        next(HttpError(400, `${id} is not valid ${param}`))
      }
    }
    next()
  }
}

module.exports = { isValidId }
