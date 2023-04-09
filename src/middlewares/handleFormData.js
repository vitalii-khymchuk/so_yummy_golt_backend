const multer = require('multer')
const path = require('path')
const { HttpError } = require('@helpers')

const uploadDir = path.resolve('./tmp')

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const { id } = req.user
    const fileName = `${id}_${file.originalname
      .toLowerCase()
      .split(' ')
      .join('-')}`
    cb(null, fileName)
  },
})

const limits = { fileSize: 5048576 }

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true)
  } else {
    cb(null, false)
    return cb(HttpError(400, 'Only .png, .jpg and .jpeg format allowed!'))
  }
}

const handleFormData = multer({
  storage,
  limits,
  fileFilter,
})

module.exports = { handleFormData }
