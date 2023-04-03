const asyncHandler = require('express-async-handler')
const { RecipesService } = require('@services')

const getByCategory = async (req, res) => {
  const { amount = 8 } = req.query
  const { categoryName } = req.params
  const data = await RecipesService.getByCategory({ categoryName, amount })
  res.status(200).json({ code: 200, data })
}
module.exports = { getByCategory: asyncHandler(getByCategory) }
