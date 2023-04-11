const { HttpError } = require('@helpers')
const asyncHandler = require('express-async-handler')
const { GoogleAuth } = require('@services')
const { User } = require('@models')

const signInGoogle = async (req, res, next) => {
  try {
    const { credential: token } = req.body
    const { name, email, picture } = await GoogleAuth.verify(token)
    const user = { name, email, avatarUrl: picture }

    const options = {
      upsert: true, // create user if not exists
      new: true, // return the newly created/updated user object
      setDefaultsOnInsert: true, // set default values when creating new document
      defaults: { createdAt: Date.now() }, // set createdAt to current date when creating new document
    }

    const { favorites, shoppingList, recipes } = await User.findOneAndUpdate(
      { email },
      { ...user, token, password: '' },
      options
    )

    const data = { ...user, favorites, shoppingList, recipes }

    res.status(200).json({ code: 200, message: 'success', data, token })
  } catch (error) {
    console.log(error)
    next(HttpError(401, 'Google authentication error'))
  }
}

module.exports = { signInGoogle: asyncHandler(signInGoogle) }
