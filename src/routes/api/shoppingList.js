const express = require('express')
const { authenticate } = require('@middlewares')
const { shoppingListCtrl } = require('@controllers')

const router = express.Router()

router.get('/shopping-list', authenticate, shoppingListCtrl.getList)
// router.post('/shopping-list', authenticate, shoppingListCtrl.postItem)
// router.delete(
//   '/shopping-list/:recipeId/:productId',
//   authenticate,
//   shoppingListCtrl.getList
// )

module.exports = router
