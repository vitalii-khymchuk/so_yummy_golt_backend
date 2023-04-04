const asyncHandler = require('express-async-handler')
const { UserService } = require('@services')

const logout = async (req, res) => {
  const { id } = req.user
  await UserService.logout({ id })
  res.status(200).json({ code: 200, message: 'success' })
}

module.exports = { logout: asyncHandler(logout) }
