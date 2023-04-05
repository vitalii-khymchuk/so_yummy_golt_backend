const express = require('express')
const { authenticate, bodyValidation } = require('@middlewares')
const { shoppingListCtrl } = require('@controllers')
const { userBodySchemas } = require('@models')

const router = express.Router()

router.get('/shopping-list', authenticate, shoppingListCtrl.getList)
router.post(
  '/shopping-list',
  authenticate,
  bodyValidation(userBodySchemas.postShoppingListItem),
  shoppingListCtrl.postItem
)
// router.delete(
//   '/shopping-list/:recipeId/:productId',
//   authenticate,
//   shoppingListCtrl.getList
// )

module.exports = router
