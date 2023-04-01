const Authorization = require('./Authorization')
const page = require('./page')
const limit = require('./limit')

module.exports = {
  parameters: {
    ...Authorization,
    ...page,
    ...limit,
  },
}
