module.exports = {
  '/recipes/category-list': require('./category-list'),
  '/recipes/main-page': require('./main-page'),
  '/recipes/category/{categoryName}': require('./category'),
  '/recipes/{recipeId}': require('./recipe-id'),
}
