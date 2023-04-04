const asyncHandler = require('express-async-handler')
const { RecipesService } = require('@services')
const { paginatedResponse } = require('@helpers')

const getMy = async (req, res) => {
  const { id } = req.user
  const { path } = req.route
  const { page, skip, limit } = req.paginatedResponse

  const { total, data } = await RecipesService.getUserRecipes(id, {
    skip,
    limit,
  })

  const result = paginatedResponse(total, data, limit, page, path)

  res.status(200).json({ code: 200, data: result })
}

module.exports = { getMy: asyncHandler(getMy) }
