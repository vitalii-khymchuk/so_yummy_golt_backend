const items = require('./items')
const itemAdd = require('./item-add')

module.exports = {
  '/shopping-list': {
    ...items,
    ...itemAdd,
  },
  '/shopping-list/{productId}': require('./item-delete'),
}
