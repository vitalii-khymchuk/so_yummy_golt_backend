module.exports = {
  '/recipes': require('./recipes'),
  '/recipes/main-page': require('./main-page'),
  '/recipes/popular': require('./popular'),
  '/recipes/{recipeId}': require('./recipe-id'),
  '/recipes/category/{categoryName}': require('./category'),
  '/recipes/category-list': require('./category-list'),
}
