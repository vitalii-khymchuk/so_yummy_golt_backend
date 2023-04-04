const { User } = require('@models')
const { HttpError } = require('@helpers')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class AuthService {
  async signup({ email, name, password, avatarUrl }) {
    const user = await User.findOne({ email })
    if (user) {
      throw HttpError(400, `User with ${email} already exist`)
    }
    const hashedPw = await bcrypt.hash(password, 10)

    const newUser = await User.create({
      email,
      password: hashedPw,
      name,
      avatarUrl,
    })

    const payload = { id: newUser._id, name: newUser.name, email }
    const { SECRET_KEY } = process.env
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' })

    // const formattedToken = `Bearer ${token}`

    await User.findByIdAndUpdate(newUser._id, { token })
    newUser.token = token
    return newUser
  }

  async signin({ email, password }) {
    const user = await User.findOne({ email })

    if (!user) throw HttpError(401, 'Email or password invalid')

    const pwCompare = await bcrypt.compare(password, user.password)

    if (!pwCompare) throw HttpError(401, 'Email or password invalid')

    const payload = { id: user._id, name: user.name, email }
    const { SECRET_KEY } = process.env
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' })
    // const formattedToken = `Bearer ${token}`

    await User.findByIdAndUpdate(user._id, { token })
    user.token = token
    return user
  }

  async logout({ id }) {
    await User.findByIdAndUpdate(id, { token: null })
  }

  async edit(id, editingData) {
    const user = await User.findByIdAndUpdate(id, editingData)
    return user
  }

  async current(userId) {
    return await User.findById(userId)
  }
}

module.exports = new AuthService()
