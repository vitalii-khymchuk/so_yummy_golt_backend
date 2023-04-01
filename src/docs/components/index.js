const parameters = require('./parameters')
const schemas = require('./schemas')
const securitySchemes = require('./securitySchemes')

module.exports = {
  components: {
    ...parameters,
    ...schemas,
    ...securitySchemes,
  },
}
