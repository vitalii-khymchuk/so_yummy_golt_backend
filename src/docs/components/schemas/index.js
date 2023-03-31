const User = require('./User')
const Recipe = require('./Recipe')
const Ingredient = require('./Ingredient')

module.exports = {
  schemas: {
    ...User,
    ...Recipe,
    ...Ingredient,
  },
}
