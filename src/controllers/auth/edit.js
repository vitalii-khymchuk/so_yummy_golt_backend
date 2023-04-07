const asyncHandler = require('express-async-handler')
const { HttpError, GOOGLE_BUCKETS } = require('@helpers')
const { UserService, GoogleCloud } = require('@services')

const edit = async (req, res) => {
  const { id } = req.user
  const { name } = req.body
  const { path, filename } = req.file
  //reduce image size
  // await resizeImage(tempPath)
  if (!name) {
    throw HttpError(400, 'Provide all necessary fields')
  }
  const [, extension] = filename.split('.')
  const cloudFilename = `avatar_${id}.${extension}`
  // const { email, avatarUrl } = await UserService.edit(id, { name })
  const avatar = await GoogleCloud.uploadFile(
    path,
    cloudFilename,
    GOOGLE_BUCKETS.USER_AVATARS
  )
  const data = { name, avatar }
  res.status(200).json({ code: 200, message: 'success', data })
}

module.exports = { edit: asyncHandler(edit) }
