const { HttpError } = require('@helpers')
const asyncHandler = require('express-async-handler')
const { GoogleAuth, UserService } = require('@services')

const signInGoogle = async (req, res, next) => {
  try {
    const { credential: token } = req.body
    const { name, email, picture } = await GoogleAuth.verify(token)
    const userData = { name, email, avatarUrl: picture }

    const { favorites, shoppingList, recipes } = await UserService.signInGoogle(
      {
        ...userData,
        token,
        password: '',
      }
    )
    const data = { ...userData, favorites, shoppingList, recipes }

    res.status(200).json({ code: 200, message: 'success', data, token })
  } catch (error) {
    console.log(error)
    next(HttpError(401, 'Google authentication error'))
  }
}

module.exports = { signInGoogle: asyncHandler(signInGoogle) }
