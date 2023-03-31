const handleMongooseError = (error, data, next) => {
  if (error.code === 11000) {
    error.status = 409
    error.message = 'User already exist'
  } else {
    error.status = 400
  }
  next()
}

module.exports = { handleMongooseError }
