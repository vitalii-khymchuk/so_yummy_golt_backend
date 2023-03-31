const BearerAuth = require('./BearerAuth')

module.exports = {
  securitySchemas: {
    ...BearerAuth,
  },
}
