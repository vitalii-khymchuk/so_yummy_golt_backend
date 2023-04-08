const asyncHandler = require('express-async-handler')
const { UserService } = require('@services')

const current = async (req, res) => {
  const { id } = req.user

  const {
    name,
    email,
    avatarUrl,
    favorites,
    shoppingList,
    token,
    daysInApp,
    recipesQt,
    favoritesQt,
  } = await UserService.current(id)

  const data = {
    id,
    name,
    email,
    avatarUrl,
    favorites,
    shoppingList,
    daysInApp,
    recipesQt,
    favoritesQt,
  }
  res.status(200).json({ code: 200, message: 'success', token, data })
}

module.exports = { current: asyncHandler(current) }
