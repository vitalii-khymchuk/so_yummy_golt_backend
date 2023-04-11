const jwt = require('jsonwebtoken')
const { HttpError } = require('@helpers')
const { GoogleAuth } = require('@services')
const { User } = require('@models')

const authenticate = async (req, res, next) => {
  const { authorization = '' } = req.headers
  const [type, token] = authorization.split(' ')
  const { SECRET_KEY } = process.env
  try {
    if (type !== 'Bearer' || !token) {
      throw HttpError(401, 'Invalid token')
    }
    const payload = jwt.verify(token, SECRET_KEY)
    req.user = payload
    next()
  } catch (e) {
    try {
      const { name, email, picture } = await GoogleAuth.verify(token)
      const [{ _id }] = await User.find({ email })
      req.user = { name, email, avatarUrl: picture, id: _id }
      next()
    } catch (error) {
      console.log('error in authenticate', error)
      next(HttpError(401, 'Invalid token'))
    }
  }
}

module.exports = { authenticate }
