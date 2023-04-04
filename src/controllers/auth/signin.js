const { HttpError } = require('@helpers')
const asyncHandler = require('express-async-handler')
const { AuthService } = require('@services')

const signin = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw HttpError(400, 'Please provide all necessary data')
  }

  const { name, avatarUrl, favorites, shoppingList, recipes, token } =
    await AuthService.signin({ email, password })

  const data = { name, email, avatarUrl, favorites, shoppingList, recipes }

  res.status(200).json({ code: 200, message: 'success', token, data })
}

module.exports = { signin: asyncHandler(signin) }
