const BearerAuth = require('./BearerAuth')

module.exports = {
  securitySchemes: {
    ...BearerAuth,
  },
}
