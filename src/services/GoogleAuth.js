const { google } = require('googleapis')

const { BASE_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env
const REDIRECT_URL = `${BASE_URL}/api/v1/auth/google/callback`
const OAuth2 = google.auth.OAuth2

const oauth2Client = new OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  REDIRECT_URL
)

const verify = async token => {
  try {
    const ticket = await oauth2Client.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID,
    })

    const payload = ticket.getPayload()
    if (payload.email_verified) {
      return payload
    } else {
      throw new Error('Email address not verified')
    }
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

module.exports = { verify }
