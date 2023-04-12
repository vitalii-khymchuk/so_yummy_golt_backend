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

  if (!name && !req.file) {
    throw HttpError(400, 'Provide all necessary fields')
  }

  if (name) {
    req.user.name = name
  }
  if (req.file) {
    const { path, filename } = req.file
    const [extension] = filename.split('.').reverse()
    const cloudFilename = `avatar_${id}.${extension}`
    await resizeImage(path, 250, 250)
    const avatar = await GoogleCloud.uploadFile(
      path,
      cloudFilename,
      GOOGLE_BUCKETS.USER_AVATARS
    )
    await removeFileLocally(path)
    req.user.avatarUrl = avatar
  }
  const data = { name: req.user.name, avatarUrl: req.user.avatarUrl }
  await UserService.edit(id, data)

  res.status(200).json({ code: 200, message: 'success', data })
}

module.exports = { edit: asyncHandler(edit) }
