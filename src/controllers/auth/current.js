const asyncHandler = require('express-async-handler')
const { AuthService } = require('@services')

const current = async (req, res) => {
  const { id } = req.user

  const { name, email, avatarUrl, favorites, shoppingList, token } =
    await AuthService.current(id)

  const data = { id, name, email, avatarUrl, favorites, shoppingList }
  res.status(200).json({ code: 200, message: 'success', token, data })
}

module.exports = { current: asyncHandler(current) }
