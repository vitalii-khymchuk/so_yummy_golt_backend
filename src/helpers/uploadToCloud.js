const { GoogleCloud } = require('../services')
const fs = require('fs/promises')
const { HttpError } = require('./HttpError')
//Move file from tmp dir to google cloud, using after multer
//After uploading puts image url to req.imageLink to using in controller
const uploadToCloud = async (path, filename, bucket) => {
  try {
    if (!path || !filename || !bucket) {
      return Promise.reject('Pass required arguments')
    }
    // const { path: tempPath, filename } = req.file
    //reduce image size
    // await resizeImage(tempPath)
    // upload to cloud
    const imageLink = await GoogleCloud.uploadFile(tempPath, filename, bucket)
    //Removing file locally
    await fs.unlink(tempPath, err => {
      if (err) {
        console.log(err)
        throw HttpError(500)
      } else {
        console.log(`${tempPath} successfully deleted`)
      }
    })
    return imageLink
  } catch (error) {
    console.log(error)
    throw HttpError(500)
  }
}

module.exports = { uploadToCloud }
