module.exports = {
  '/recipes': require('./recipes'),
  '/recipes/{recipeId}': require('./recipe-id'),
  '/recipes/category-list': require('./category-list'),
  '/recipes/main-page': require('./main-page'),
  '/recipes/category/{categoryName}': require('./category'),
}
