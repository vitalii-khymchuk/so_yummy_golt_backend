const recipes = require('./recipes')
const recipeAdd = require('./recipe-add')
const recipeDelete = require('./recipe-delete')
const recipeId = require('./recipe-id')
const favoriteAdd = require('./favorite-add')
const favoriteDelete = require('./favorite-delete')

module.exports = {
  '/recipes': {
    ...recipeAdd,
    ...recipes,
  },
  '/recipes/{recipeId}': {
    ...recipeId,
    ...recipeDelete,
  },
  '/recipes/{recipeId}/favorite': {
    ...favoriteAdd,
    ...favoriteDelete,
  },
  '/recipes/my': require('./my'),
  '/recipes/my/favorite': require('./my-favorite'),
  '/recipes/main-page': require('./main-page'),
  '/recipes/popular': require('./popular'),
  '/recipes/category/{categoryName}': require('./category'),
  '/recipes/category-list': require('./category-list'),
}
