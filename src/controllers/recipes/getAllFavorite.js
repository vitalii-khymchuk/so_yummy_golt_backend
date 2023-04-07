const asyncHandler = require('express-async-handler')

const { paginatedResponse } = require('@helpers')
const { RecipesService, UserService } = require('@services')

const getAllFavorite = async (req, res) => {
  const { path } = req.route
  const { id: owner } = req.user

  const { page, skip, limit } = req.paginatedResponse

  const { favorites: ids } = await UserService.getFavoriteList(owner)

  const match = {
    $or: [{ isPublic: true }, { owner }],
    _id: {
      $in: [...ids],
    },
  }

  const { total, data } = await RecipesService.searchAll(match, {
    skip,
    limit,
  })

  const result = paginatedResponse(total, data, limit, page, path)

  res.json({ code: 200, message: 'success', ...result })
}

module.exports = { getAllFavorite: asyncHandler(getAllFavorite) }
