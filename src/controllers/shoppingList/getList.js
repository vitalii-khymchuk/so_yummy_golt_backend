const { UserService } = require('@services')
const asyncHandler = require('express-async-handler')
const { groupShopList } = require('@helpers')

const getList = async (req, res) => {
  const { id } = req.user
  const data = await UserService.getShoppingList(id)
  const groupedData = groupShopList(data)
  res.status(200).json({ code: 200, message: 'success', data: groupedData })
}

module.exports = { getList: asyncHandler(getList) }
