const { UserService } = require('@services')
const asyncHandler = require('express-async-handler')

const getList = async (req, res) => {
  const { id } = req.user
  const data = await UserService.getShoppingList(id)
  res.status(200).json({ code: 200, message: 'success', data })
}

module.exports = { getList: asyncHandler(getList) }
