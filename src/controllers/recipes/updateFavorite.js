const asyncHandler = require('express-async-handler')

const { HttpError } = require('@helpers')
const { UserService, RecipesService } = require('@services')

const updateFavorite = async (req, res) => {
  const { recipeId } = req.params
  if (!recipeId) {
    throw HttpError(400, 'Please provide all required fields')
  }
  const { id: owner } = req.user
  switch (req.method) {
    case 'PATCH':
      await UserService.addToFavorite(owner, recipeId, HttpError)
      break
    case 'DELETE':
      await UserService.removeFromFavorite(owner, recipeId, HttpError)
      break
    default:
      throw HttpError('400', 'Unknown operation')
  }
  const data = await RecipesService.searchById(recipeId, owner)
  res.status(200).json({ code: 200, message: 'success', data })
}

module.exports = { updateFavorite: asyncHandler(updateFavorite) }
