const asyncHandler = require('express-async-handler')

const { paginatedResponse } = require('@helpers')
const { RecipesService, IngredientsService } = require('@services')

const getAll = async (req, res) => {
  const { path } = req.route
  const { filter } = req.query
  const { page, skip, limit } = req.paginatedResponse

  const match = {
    isPublic: true,
  }

  if (filter?.title) {
    match.title = { $regex: filter.title, $options: 'i' }
  }

  if (filter?.ingredients) {
    const ids = await IngredientsService.searchIdsByTitle(filter.ingredients)
    match['ingredients.id'] = {
      $in: [...ids],
    }
  }

  const { total, data } = await RecipesService.searchAll(match, {
    skip,
    limit,
  })

  const result = paginatedResponse(total, data, limit, page, path)

  res.json({ code: 200, message: 'success', ...result })
}

module.exports = { getAll: asyncHandler(getAll) }
