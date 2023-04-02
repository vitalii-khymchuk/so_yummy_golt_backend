const asyncHandler = require('express-async-handler')

const { paginatedResponse } = require('@helpers')
const { RecipesService } = require('@services')

const getAll = async (req, res) => {
  const { path } = req.route
  const { page, skip, limit } = req.paginatedResponse

  const match = {}
  const { filter } = req.query

  if (filter?.title) {
    match.title = { $regex: filter.title, $options: 'i' }
  }

  // if (filter?.ingredients) {
  //   match.ingredients = filter.ingredients
  // }

  const { total, data } = await RecipesService.searchAll(match, {
    skip,
    limit,
  })

  const result = paginatedResponse(total, data, limit, page, path)

  res.json(result)
}

module.exports = { getAll: asyncHandler(getAll) }
