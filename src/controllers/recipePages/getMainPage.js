const asyncHandler = require('express-async-handler')
const { CategoryService } = require('@services')

const getMainPage = async (req, res) => {
  const { categoriesLimit = 8, recipesInCategory = 4 } = req.query
  const data = await CategoryService.getMainPageRecipes({
    categoriesLimit,
    recipesInCategory,
  })
  res.status(200).json({ code: 200, data })
}

module.exports = { getMainPage: asyncHandler(getMainPage) }
