const asyncHandler = require('express-async-handler')

const { HttpError } = require('@helpers')
const { RecipesService } = require('@services')

const deleteOne = async (req, res) => {
  const { recipeId } = req.params
  if (!recipeId) {
    throw HttpError(400, 'Please provide all required fields')
  }
  const { id: owner } = req.user
  const data = await RecipesService.removeOwnById(recipeId, owner)
  if (!data) {
    throw HttpError(404, 'Not found')
  }
  res.status(200).json({ code: 200, message: 'success', data })
}

module.exports = { deleteOne: asyncHandler(deleteOne) }
