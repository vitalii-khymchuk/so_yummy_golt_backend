const { HttpError, emails } = require('@helpers')
const asyncHandler = require('express-async-handler')
const { GoogleAuth, UserService, sendEmail } = require('@services')

const signInGoogle = async (req, res, next) => {
  try {
    const { credential: token } = req.body
    const { name, email, picture } = await GoogleAuth.verify(token)
    const userData = { name, email, avatarUrl: picture }

    const {
      _doc: { favorites, shoppingList, recipes, password, avatarUrl },
    } = await UserService.signInGoogle({
      ...userData,
      token,
    })

    if (password) {
      const { letter, text } = emails.auth.signupTemplate(name, password)
      await sendEmail(
        email,
        'Welcome to The SoYummy 🍃 - More than just a collection of recipes!',
        text,
        letter
      )
    }
    const data = { ...userData, avatarUrl, favorites, shoppingList, recipes }

    res.status(200).json({ code: 200, message: 'success', data, token })
  } catch (error) {
    console.log(error)
    next(HttpError(401, 'Google authentication error'))
  }
}

module.exports = { signInGoogle: asyncHandler(signInGoogle) }
