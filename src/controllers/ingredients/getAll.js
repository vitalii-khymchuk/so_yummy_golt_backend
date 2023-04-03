const asyncHandler = require('express-async-handler')
const { IngredientsService } = require('@services')

const getAll = async (req, res) => {
  const ingredients = await IngredientsService.getList()
  res.status(200).json({ code: 200, data: ingredients })
}

module.exports = { getAll: asyncHandler(getAll) }
