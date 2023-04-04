const asyncHandler = require('express-async-handler')
const { HttpError } = require('@helpers')
const { UserService } = require('@services')

const signup = async (req, res) => {
  const { email, password, name, avatarUrl = 'avatarURL' } = req.body
  if (!email || !password || !name) {
    throw HttpError(400, 'Please provide all necessary data')
  }
  const { favorites, shoppingList, recipes, token } = await UserService.signup({
    email,
    name,
    password,
    avatarUrl,
  })

  const data = { name, email, avatarUrl, favorites, shoppingList, recipes }

  res.status(201).json({ code: 201, message: 'success', token, data })
}

module.exports = { signup: asyncHandler(signup) }
