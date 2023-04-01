const auth = require('./auth')
const recipes = require('./recipes')
const ingredients = require('./ingredients')
const shoppingList = require('./shopping-list')

module.exports = {
  paths: {
    ...auth,
    ...recipes,
    ...ingredients,
    ...shoppingList,
  },
}
