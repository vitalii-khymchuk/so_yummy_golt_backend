const auth = require('./auth')
const recipes = require('./recipes')

module.exports = {
  paths: {
    ...auth,
    ...recipes,
  },
}
