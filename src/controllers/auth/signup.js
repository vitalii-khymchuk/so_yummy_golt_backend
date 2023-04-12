const asyncHandler = require('express-async-handler')
const { HttpError, createMockAvatar, emails } = require('@helpers')
const { UserService, sendEmail } = require('@services')

const signup = async (req, res) => {
  const { email, password, name } = req.body
  if (!email || !password || !name) {
    throw HttpError(400, 'Please provide all necessary data')
  }
  const avatarUrl = createMockAvatar(email)
  const { favorites, shoppingList, recipes, token } = await UserService.signup({
    email,
    name,
    password,
    avatarUrl,
  })

  const { letter, text } = emails.auth.signupTemplate(name, password)
  await sendEmail(
    email,
    'Welcome to The SoYummy 🍃 - More than just a collection of recipes!',
    text,
    letter
  )

  const data = { name, email, avatarUrl, favorites, shoppingList, recipes }

  res.status(201).json({ code: 201, message: 'success', token, data })
}

module.exports = { signup: asyncHandler(signup) }
