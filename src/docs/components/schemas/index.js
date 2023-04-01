const User = require('./User')
const Recipe = require('./Recipe')
const Ingredient = require('./Ingredient')
const PaginatedResponse = require('./PaginatedResponse')

module.exports = {
  schemas: {
    ...User,
    ...Recipe,
    ...Ingredient,
    ...PaginatedResponse,
  },
}
