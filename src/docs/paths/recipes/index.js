const recipes = require('./recipes')
const recipeAdd = require('./recipe-add')

module.exports = {
  '/recipes': {
    ...recipes,
    ...recipeAdd,
  },
  '/recipes/main-page': require('./main-page'),
  '/recipes/popular': require('./popular'),
  '/recipes/{recipeId}': require('./recipe-id'),
  '/recipes/category/{categoryName}': require('./category'),
  '/recipes/category-list': require('./category-list'),
}
