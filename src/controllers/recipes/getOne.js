const asyncHandler = require('express-async-handler')

const { HttpError } = require('@helpers')
const { RecipesService } = require('@services')

const getOne = async (req, res) => {
  const { recipeId } = req.params

  if (!recipeId) {
    res.status(400)
    throw new Error('Please provide all required fields')
  }

  const data = await RecipesService.searchById(recipeId)

  if (!data) {
    throw HttpError(404, 'Not found')
  }

  res.json({ code: 200, message: 'success', data })
}

module.exports = { getOne: asyncHandler(getOne) }
