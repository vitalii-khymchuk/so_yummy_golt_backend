const { HttpError } = require('@helpers')
const asyncHandler = require('express-async-handler')
const { User, Category, Recipe } = require('@models')
const { pipelines } = require('@helpers')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signin = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw HttpError(400, 'Please provide all necessary data')
  }
  const user = await User.findOne({ email })

  if (!user) throw HttpError(401, 'Email or password invalid')

  const pwCompare = await bcrypt.compare(password, user.password)

  if (!pwCompare) throw HttpError(401, 'Email or password invalid')

  const payload = { id: user._id, name: user.name, email }
  const { SECRET_KEY } = process.env
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' })

  await User.findByIdAndUpdate(user._id, { token })

  const info = await Recipe.aggregate([
    ...pipelines.addCheckedFieldsToRecipes(user._id),
  ])

  res.status(201).json({ code: 201, token, info })
}

module.exports = { signin: asyncHandler(signin) }
