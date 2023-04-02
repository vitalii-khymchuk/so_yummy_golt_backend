const authenticate = (req, res, next) => {
  console.log('auth')
  next()
}

module.exports = { authenticate }
