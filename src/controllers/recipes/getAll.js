const asyncHandler = require('express-async-handler')

const { paginatedResponse } = require('@helpers')
const { RecipesService } = require('@services')

const getAll = async (req, res) => {
  const { path } = req.route
  const { page, skip, limit } = req.paginatedResponse

  const match = {}
  const { filters } = req.query

  if (filters?.title) {
    match.title = { $regex: filters.title, $options: 'i' }
  }

  // if (filters?.ingredients) {
  //   match.ingredients = filters.ingredients
  // }

  const { total, data } = await RecipesService.searchAll(match, {
    skip,
    limit,
  })

  const result = paginatedResponse(total, data, limit, page, path)

  res.json(result)
}

module.exports = { getAll: asyncHandler(getAll) }
