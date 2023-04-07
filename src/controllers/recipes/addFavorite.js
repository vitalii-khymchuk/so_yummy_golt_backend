const asyncHandler = require('express-async-handler')

const { HttpError } = require('@helpers')
const { UserService } = require('@services')

const addFavorite = async (req, res) => {
  const { recipeId } = req.params
  if (!recipeId) {
    throw HttpError(400, 'Please provide all required fields')
  }
  const { id: owner } = req.user
  const data = await UserService.addToFavorite(owner, recipeId, HttpError)
  if (!data) {
    throw HttpError(500, 'Server Error')
  }
  res.status(200).json({ code: 200, message: 'success' })
}

module.exports = { addFavorite: asyncHandler(addFavorite) }
