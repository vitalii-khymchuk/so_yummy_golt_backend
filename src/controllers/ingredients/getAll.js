const asyncHandler = require('express-async-handler')
const { ingredientsService } = require('@services')

const getAll = async (req, res) => {
  const ingredients = await ingredientsService.getList()
  res.status(200).json({ code: 200, data: ingredients })
}

module.exports = { getAll: asyncHandler(getAll) }
