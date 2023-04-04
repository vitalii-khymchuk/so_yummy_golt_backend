const asyncHandler = require('express-async-handler')
const { HttpError } = require('@helpers')
const { AuthService } = require('@services')

const edit = async (req, res) => {
  const { id } = req.user
  const { name } = req.body
  if (!name) {
    throw HttpError(400, 'Provide all necessary fields')
  }
  const { email, avatarUrl } = await AuthService.edit(id, { name })
  const data = { name, avatarUrl, email }
  res.status(200).json({ code: 200, message: 'success', data })
}

module.exports = { edit: asyncHandler(edit) }
