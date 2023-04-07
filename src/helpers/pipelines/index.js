const { addCheckedFieldsToRecipes } = require('./addCheckedFieldsToRecipes')
const {
  addIngredientsFieldsToRecipe,
} = require('./addIngredientsFieldsToRecipe')
const {
  calculatePopularityOfRecipes,
} = require('./calculatePopularityOfRecipes')
const { mainPage } = require('./mainPage')
const { getPopularByCategory } = require('./getPopularByCategory')
const { getShoppingList } = require('./getShoppingList')

module.exports = {
  addCheckedFieldsToRecipes,
  addIngredientsFieldsToRecipe,
  calculatePopularityOfRecipes,
  mainPage,
  getPopularByCategory,
  getShoppingList,
}
