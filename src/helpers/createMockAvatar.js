const gravatar = require('gravatar')

const createMockAvatar = email =>
  gravatar.url(email, { s: '250', r: 'pg', d: 'mm' })

module.exports = { createMockAvatar }
