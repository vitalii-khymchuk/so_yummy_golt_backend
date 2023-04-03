const asyncHandler = require('express-async-handler')
const { RecipesService } = require('@services')

const getMainPage = async (req, res) => {
  const { categoriesNum = 8, recipesInCategory = 4 } = req.query
  const data = await RecipesService.getMainPageRecipes({
    categoriesNum,
    recipesInCategory,
  })
  res.status(200).json({ code: 200, data })
}

module.exports = { getMainPage: asyncHandler(getMainPage) }
