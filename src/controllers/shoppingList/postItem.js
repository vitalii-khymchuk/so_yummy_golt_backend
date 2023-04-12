const { UserService } = require('@services')
const asyncHandler = require('express-async-handler')
const { isValidObjectId } = require('mongoose')
const { HttpError } = require('@helpers')

const postItem = async (req, res) => {
  const { id, recipeId, amount = '', measure = '' } = req.body
  const { id: userId } = req.user
  const amountOrMeasure = amount || measure
  if (
    !id ||
    !isValidObjectId(id) ||
    !recipeId ||
    !isValidObjectId(recipeId) ||
    !amountOrMeasure
  ) {
    throw HttpError(400)
  }
  const item = {
    id,
    recipeId,
    amount,
    measure,
  }
  const result = await UserService.createShoppingItem(userId, {
    id,
    recipeId,
    amount,
    measure,
  })
  if (!result) {
    throw HttpError(500)
  }
  res.status(201).json({ code: 201, message: 'success', data: item })
}

module.exports = { postItem: asyncHandler(postItem) }
