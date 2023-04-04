const { addCheckedFieldsToRecipes } = require('./addCheckedFieldsToRecipes')
const {
  calculatePopularityOfRecipes,
} = require('./calculatePopularityOfRecipes')
const { mainPage } = require('./mainPage')
const { getPopularByCategory } = require('./getPopularByCategory')

module.exports = {
  addCheckedFieldsToRecipes,
  calculatePopularityOfRecipes,
  mainPage,
  getPopularByCategory,
}
