const { HttpError } = require('@helpers')
const asyncHandler = require('express-async-handler')
const { UserService } = require('@services')

const signin = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw HttpError(400, 'Please provide all necessary data')
  }

  const { name, avatarUrl, favorites, shoppingList, recipes, token } =
    await UserService.signin({ email, password })

  const data = { name, email, avatarUrl, favorites, shoppingList, recipes }

  res.status(201).json({ code: 201, message: 'success', token, data })
}

module.exports = { signin: asyncHandler(signin) }
