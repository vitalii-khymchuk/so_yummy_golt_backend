const asyncHandler = require('express-async-handler')
const {
  HttpError,
  moveImgToCloud,
  GOOGLE_BUCKETS,
  uploadToCloud,
} = require('@helpers')
const { UserService } = require('@services')

const edit = async (req, res) => {
  const { id } = req.user
  const { name } = req.body
  const { path } = req.file
  // if (!name) {
  //   throw HttpError(400, 'Provide all necessary fields')
  // }
  const filename = `avatar_${id}`
  // const { email, avatarUrl } = await UserService.edit(id, { name })
  // const avatar = await uploadToCloud(
  //   path,
  //   filename,
  //   GOOGLE_BUCKETS.USER_AVATARS
  // )
  const data = { name, avatar }
  res.status(200).json({ code: 200, message: 'success', data })
}

module.exports = { edit: asyncHandler(edit) }
