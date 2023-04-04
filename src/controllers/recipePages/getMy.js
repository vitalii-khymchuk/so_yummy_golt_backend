const asyncHandler = require('express-async-handler')
const { RecipesService } = require('@services')

const getMy = async (req, res) => {
  const { id } = req.user
  const recipes = await RecipesService.getUserRecipes(id)
  res.status(200).json({ code: 200, data: recipes })
}

module.exports = { getMy: asyncHandler(getMy) }
