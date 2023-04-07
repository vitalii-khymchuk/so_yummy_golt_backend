const multer = require('multer')
const path = require('path')
const { HttpError } = require('@helpers')

const uploadDir = path.resolve('./tmp')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir)
  },
  filename: (req, file, cb) => {
    const extensions = ['.jpg', '.jpeg', '.png', '.gif']
    const { id } = req.user
    const fileName = `${id}_${file.originalname}`

    if (!extensions.some(e => fileName.toLowerCase().endsWith(e))) {
      cb(HttpError(400, 'Invalid  extension type'))
    } else {
      cb(null, fileName)
    }
  },
  limits: { fileSize: 5048576 },
})

const handleFormData = multer({ storage })

module.exports = { handleFormData }
