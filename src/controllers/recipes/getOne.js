const asyncHandler = require('express-async-handler')

const { HttpError } = require('@helpers')
const { RecipesService } = require('@services')

const getOne = async (req, res) => {
  const { recipeId } = req.params
  const { id: owner } = req.user

  if (!recipeId) {
    throw HttpError(400, 'Please provide all required fields')
  }

  const data = await RecipesService.searchById(recipeId, owner)

  if (!data) {
    throw HttpError(404, 'Not found')
  }

  res.json({ code: 200, message: 'success', data })
}

module.exports = { getOne: asyncHandler(getOne) }
