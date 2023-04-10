const { HttpError } = require('@helpers')
const asyncHandler = require('express-async-handler')
const { GoogleAuth } = require('@services')
const { User } = require('@models')

const signInGoogleSuccess = async (req, res, next) => {
  const code = req.query.code
  await GoogleAuth.oauth2Client.getToken(code, async (err, tokens) => {
    try {
      if (err) {
        throw new Error(err)
      }
      GoogleAuth.oauth2Client.setCredentials(tokens)

      const { name, email, picture } = await GoogleAuth.verify(tokens.id_token)
      const token = tokens.id_token

      const user = { name, email, avatarUrl: picture }

      await User.findOneAndUpdate(
        { email },
        { ...user, token, password: '' },
        { upsert: true }
      )

      res.status(200).json({ code: 200, message: 'success', token, data: user })
    } catch (error) {
      console.log(error)
      next(HttpError(401, 'Google authentication error'))
    }
  })
}

module.exports = { signInGoogleSuccess: asyncHandler(signInGoogleSuccess) }
