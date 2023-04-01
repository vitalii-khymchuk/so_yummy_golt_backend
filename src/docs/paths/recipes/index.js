const recipes = require('./recipes')
const recipeAdd = require('./recipe-add')
const recipeDelete = require('./recipe-delete')
const recipeId = require('./recipe-id')

module.exports = {
  '/recipes': {
    ...recipes,
    ...recipeAdd,
  },
  '/recipes/{recipeId}': {
    ...recipeId,
    ...recipeDelete,
  },
  '/recipes/my': require('./my'),
  '/recipes/main-page': require('./main-page'),
  '/recipes/popular': require('./popular'),
  '/recipes/category/{categoryName}': require('./category'),
  '/recipes/category-list': require('./category-list'),
}
