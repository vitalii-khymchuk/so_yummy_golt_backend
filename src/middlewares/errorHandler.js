const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500

  res.status(statusCode)

  res.json({
    message: err.message,
    code: statusCode,
    status: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

module.exports = errorHandler
