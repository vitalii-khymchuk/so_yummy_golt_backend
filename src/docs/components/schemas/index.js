const User = require('./User')
const Recipe = require('./Recipe')
const RecipeIngredient = require('./RecipeIngredient')
const Ingredient = require('./Ingredient')
const PaginatedResponse = require('./PaginatedResponse')
const SuccessResponse = require('./SuccessResponse')

module.exports = {
  schemas: {
    ...User,
    ...Recipe,
    ...RecipeIngredient,
    ...Ingredient,
    ...SuccessResponse,
    ...PaginatedResponse,
  },
}
