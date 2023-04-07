const fs = require('fs/promises')
const { HttpError } = require('./HttpError')

const removeFileLocally = async path => {
  try {
    //Removing file locally
    await fs.unlink(path, err => {
      if (err) {
        console.log(err)
        throw HttpError(500)
      } else {
        console.log(`${path} successfully deleted`)
      }
    })
  } catch (error) {
    console.log(error)
    throw HttpError(500)
  }
}

module.exports = { removeFileLocally }
