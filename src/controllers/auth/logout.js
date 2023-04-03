const asyncHandler = require('express-async-handler')
const { AuthService } = require('@services')

const logout = async (req, res) => {
  const { id } = req.user
  await AuthService.logout({ id })
  res.status(200).json({ code: 200, message: 'Logout success' })
}

module.exports = { logout: asyncHandler(logout) }
