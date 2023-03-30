const signin = require('./signin')
const signup = require('./signUp')
const logout = require('./logout')
const current = require('./current')
const edit = require('./edit')

module.exports = {
  '/signin': signin,
  '/signup': signup,
  '/logout': logout,
  '/current': current,
  '/edit': edit,
}
