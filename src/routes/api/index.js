const docsRouter = require('./docs')
const authRouter = require('./auth')
const recipesRouter = require('./recipes')
const ingredientsRouter = require('./ingredients')
const recipePagesRouter = require('./recipesPages')
const categoryListRouter = require('./categoryList')
const shoppingListRouter = require('./shoppingList')
const subscribeRouter = require('./subscribe')

module.exports = {
  docsRouter,
  authRouter,
  recipesRouter,
  ingredientsRouter,
  recipePagesRouter,
  categoryListRouter,
  shoppingListRouter,
  subscribeRouter,
}
