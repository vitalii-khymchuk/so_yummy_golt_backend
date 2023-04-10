const { google } = require('googleapis')

const REDIRECT_URL = 'http://localhost:3001/api/v1/auth/google/callback'
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env

const OAuth2 = google.auth.OAuth2

const oauth2Client = new OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  REDIRECT_URL
)

const verify = async token => {
  const CLIENT_ID = process.env.GOOGLE_CLIENT_ID
  try {
    const ticket = await oauth2Client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    })
    const payload = ticket.getPayload()
    if (payload.email_verified) {
      return payload
    } else {
      throw new Error('Email address not verified')
    }
  } catch (error) {
    return Promise.reject(error)
  }
}

module.exports = { oauth2Client, verify }
