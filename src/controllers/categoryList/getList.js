const { CategoryService } = require('@services')
const asyncHandler = require('express-async-handler')

const getList = async (req, res) => {
  const data = await CategoryService.getCategories()
  res.status(200).json({ code: 200, message: 'success', data })
}

module.exports = { getList: asyncHandler(getList) }
