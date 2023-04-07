const asyncHandler = require('express-async-handler')

const { paginatedResponse } = require('@helpers')
const { RecipesService, IngredientsService } = require('@services')

const getAll = async (req, res) => {
  const { path } = req.route
  const { filter } = req.query
  const { id: owner } = req.user

  const { page, skip, limit } = req.paginatedResponse

  const searchParams = {
    owner,
  }

  if (filter?.title) {
    searchParams.title = filter.title
  }

  if (filter?.ingredients) {
    const ids = await IngredientsService.searchIdsByTitle(filter.ingredients)
    searchParams.ingredientsIds = ids
  }

  const { total, data } = await RecipesService.searchAll(searchParams, {
    skip,
    limit,
  })

  const result = paginatedResponse(total, data, limit, page, path)

  res.json({ code: 200, message: 'success', ...result })
}

module.exports = { getAll: asyncHandler(getAll) }
