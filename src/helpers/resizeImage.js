const fs = require('fs/promises')
const { HttpError } = require('./HttpError')
const sharp = require('sharp')
const resizeImage = async (path, width = 250, height = 250) => {
  try {
    await sharp(path)
      .resize(width, height, {
        fit: 'cover',
      })
      .toBuffer()
      .then(data => {
        fs.writeFile(path, data)
      })
  } catch (error) {
    console.log(error)
    throw HttpError(500)
  }
}

module.exports = { resizeImage }
