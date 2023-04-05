const { UserService } = require('@services')
const asyncHandler = require('express-async-handler')
const { isValidObjectId } = require('mongoose')
const { HttpError } = require('@helpers')

const postItem = async (req, res) => {
  const { id, recipeId, amount, measure } = req.body
  const { id: userId } = req.user
  if (
    !id ||
    !isValidObjectId(id) ||
    !recipeId ||
    !isValidObjectId(recipeId) ||
    !amount ||
    !measure
  ) {
    throw HttpError(400)
  }
  const data = await UserService.createShoppingItem(userId, {
    id,
    recipeId,
    amount,
    measure,
  })
  res.status(201).json({ code: 200, message: 'success', data })
}

module.exports = { postItem: asyncHandler(postItem) }
