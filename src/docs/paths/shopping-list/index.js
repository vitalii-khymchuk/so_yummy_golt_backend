const items = require('./items')
const itemAdd = require('./item-add')

module.exports = {
  '/shopping-list': {
    ...items,
    ...itemAdd,
  },
  '/shopping-list/{recipeId}/{productId}': require('./item-delete'),
}
