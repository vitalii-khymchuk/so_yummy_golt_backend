const auth = require('./auth')
const recipes = require('./recipes')
const shoppingList = require('./shopping-list')

module.exports = {
  paths: {
    ...auth,
    ...recipes,
    ...shoppingList,
  },
}
