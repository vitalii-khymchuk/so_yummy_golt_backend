const { authBodySchemas, User } = require('./User')
const { recipeBodySchemas, Recipe } = require('./Recipe')
const { Category } = require('./Category')
const { Ingredient } = require('./Ingredient')

module.exports = {
  authBodySchemas,
  User,
  recipeBodySchemas,
  Recipe,
  Category,
  Ingredient,
}
