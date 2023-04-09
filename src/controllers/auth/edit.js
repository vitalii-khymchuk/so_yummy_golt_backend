const asyncHandler = require('express-async-handler')
const {
  HttpError,
  GOOGLE_BUCKETS,
  removeFileLocally,
  resizeImage,
} = require('@helpers')
const { UserService, GoogleCloud } = require('@services')

const edit = async (req, res) => {
  const { id } = req.user
  const { name } = req.body
  const { path, filename } = req.file

  if (!name) {
    throw HttpError(400, 'Provide all necessary fields')
  }
  const [extension] = filename.split('.').reverse()
  const cloudFilename = `avatar_${id}.${extension}`

  await resizeImage(path, 250, 250)
  await UserService.edit(id, { name })
  const avatar = await GoogleCloud.uploadFile(
    path,
    cloudFilename,
    GOOGLE_BUCKETS.USER_AVATARS
  )
  await removeFileLocally(path)
  const data = { name, avatarUrl: avatar }
  res.status(200).json({ code: 200, message: 'success', data })
}

module.exports = { edit: asyncHandler(edit) }
