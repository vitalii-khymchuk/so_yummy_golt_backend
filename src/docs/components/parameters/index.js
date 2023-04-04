const page = require('./page')
const limit = require('./limit')
const recipeId = require('./recipeId')
const productId = require('./productId')

module.exports = {
  parameters: {
    ...page,
    ...limit,
    ...recipeId,
    ...productId,
  },
}
