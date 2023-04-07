const { Storage } = require('@google-cloud/storage')
const { HttpError } = require('@helpers')

const storage = new Storage()

const uploadFile = async (path, filename, bucket) => {
  const options = {
    destination: filename,
  }
  try {
    if (!path || !filename || !bucket) {
      return Promise.reject('Pass required arguments')
    }
    const [data] = await storage.bucket(bucket).upload(path, options)
    console.log(`${filename} uploaded to ${bucket}`)
    return `https://storage.googleapis.com/${bucket}/${data.metadata.name}`
  } catch (error) {
    console.log(error)
    throw HttpError(500)
  }
}

const removeFile = async (fileName, bucket) => {
  try {
    await storage.bucket(bucket).file(fileName).delete()
    console.log(`gs://${bucket}/${fileName} deleted`)
  } catch (error) {
    console.log(error)
  }
}

module.exports = { uploadFile, removeFile }
