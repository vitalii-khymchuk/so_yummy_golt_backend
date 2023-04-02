const asyncHandler = require('express-async-handler')
const { HttpError } = require('@helpers')
const { User } = require('@models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signup = async (req, res) => {
  const { email, password, name, avatarUrl = 'avatarURL' } = req.body
  if (!email || !password || !name) {
    throw HttpError(400, 'Please provide all necessary data')
  }
  const user = await User.findOne({ email })
  if (user) {
    throw HttpError(400, `User with ${email} already exist`)
  }
  const hashedPw = await bcrypt.hash(password, 10)

  const newUser = await User.create({
    email,
    password: hashedPw,
    name,
    avatarUrl,
  })

  const payload = { id: newUser._id, name: newUser.name, email }
  const { SECRET_KEY } = process.env
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' })

  await User.findByIdAndUpdate(newUser._id, { token })

  const { favorites, shoppingList, recipes } = user
  const data = { name, email, avatarUrl, favorites, shoppingList, recipes }

  res.status(201).json({ status: 201, token, data })
}

module.exports = { signup: asyncHandler(signup) }
