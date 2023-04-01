const Authorization = require('./Authorization')
const page = require('./page')
const limit = require('./limit')
const recipeId = require('./recipeId')

module.exports = {
  parameters: {
    ...Authorization,
    ...page,
    ...limit,
    ...recipeId,
  },
}
