const asyncHandler = require('express-async-handler')
const { RecipesService } = require('@services')

const getPopular = async (req, res) => {
  const { limit = 4 } = req.query
  const data = await RecipesService.getPopular(limit)
  res.status(200).json({ code: 200, message: 'success', data })
}

module.exports = { getPopular: asyncHandler(getPopular) }
