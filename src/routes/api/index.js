const authRouter = require('./auth')
const recipesRouter = require('./recipes')
const ingredientsRouter = require('./ingredients')
const recipePagesRouter = require('./recipesPages')
const categoryListRouter = require('./categoryList')
const shoppingListRouter = require('./shoppingList')

module.exports = {
  authRouter,
  recipesRouter,
  ingredientsRouter,
  recipePagesRouter,
  categoryListRouter,
  shoppingListRouter,
}
