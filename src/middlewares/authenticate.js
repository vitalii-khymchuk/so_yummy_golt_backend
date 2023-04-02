const jwt = require('jsonwebtoken')
const { HttpError } = require('@helpers')

const authenticate = (req, res, next) => {
  const { authorization = '' } = req.headers
  const [type, token] = authorization.split(' ')
  if (type !== 'Bearer' || !token) {
    next(HttpError(401, 'Invalid token'))
  }
  const { SECRET_KEY } = process.env
  try {
    const payload = jwt.verify(token, SECRET_KEY)
    req.user = payload
    next()
  } catch (error) {
    next(HttpError(401, 'Invalid token'))
  }
}

module.exports = { authenticate }
