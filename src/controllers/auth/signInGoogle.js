const asyncHandler = require('express-async-handler')
const { GoogleAuth } = require('@services')

const signInGoogle = (req, res) => {
  const scopes = [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
  ]
  const url = GoogleAuth.oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
  })

  res.redirect(url)
}

module.exports = { signInGoogle: asyncHandler(signInGoogle) }
