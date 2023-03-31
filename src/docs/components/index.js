const parameters = require('./parameters')
const schemas = require('./schemas')
const securitySchemas = require('./securitySchemas')

module.exports = {
  components: {
    ...parameters,
    ...schemas,
    ...securitySchemas,
  },
}
