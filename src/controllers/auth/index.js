const { signup } = require('./signup')
const { signin } = require('./signin')
const { current } = require('./current')
const { logout } = require('./logout')
const { edit } = require('./edit')
const { signInGoogleSuccess } = require('./signInGoogleSuccess')
const {signInGoogle} = require('./signInGoogle')

module.exports = {
  signup,
  signin,
  current,
  logout,
  edit,
  signInGoogleSuccess,
  signInGoogle,
}
