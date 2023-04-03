const asyncHandler = require('express-async-handler')
const { RecipesService } = require('@services')

const getByCategory = async (req, res) => {
  const { categoryName, amount = 8 } = req.query
  const data = RecipesService.getByCategory({ categoryName, amount })
  res.status(200).json({ code: 200, data })
}
module.exports = { getByCategory: asyncHandler(getByCategory) }
