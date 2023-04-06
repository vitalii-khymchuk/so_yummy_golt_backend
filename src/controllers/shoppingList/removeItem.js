const { UserService } = require('@services')
const asyncHandler = require('express-async-handler')
const { HttpError, groupShopList } = require('@helpers')

const removeItem = async (req, res) => {
  const { recipeId } = req.body
  const { id } = req.user
  const { productId } = req.params
  if (!recipeId || recipeId.length === 0) {
    throw HttpError(400, 'Missed or empty recipeId array')
  }
  const data = await UserService.removeShoppingItem(id, productId, recipeId)
  const groupedData = groupShopList(data)
  res.status(200).json({ code: 200, message: 'success', data: groupedData })
}

module.exports = { removeItem: asyncHandler(removeItem) }
