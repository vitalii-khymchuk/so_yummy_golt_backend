const { User } = require('@models')
const { HttpError } = require('@helpers')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { compareObjectId } = require('@helpers')

class UserService {
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

  async getShoppingList(userId) {
    const { shoppingList } = await User.findById(userId)
      .select('shoppingList')
      .populate('shoppingList')
    return shoppingList
  }
  async createShoppingItem(userId, { id, recipeId, amount, measure }) {
    const { shoppingList } = await User.findById(userId)
    shoppingList.unshift({ id, recipeId, amount, measure })
    const { shoppingList: data } = await User.findByIdAndUpdate(
      userId,
      { shoppingList },
      { new: true }
    )
    return data
  }
  async removeShoppingItem(userId, itemId, recipeIds) {
    const { shoppingList } = await User.findById(userId)
    let filteredList = [...shoppingList]
    recipeIds.forEach(e => {
      filteredList = filteredList.filter(({ id, recipeId }) => {
        return !(compareObjectId(id, itemId) && compareObjectId(e, recipeId))
      })
    })
    const { shoppingList: data } = await User.findByIdAndUpdate(
      userId,
      { shoppingList: filteredList },
      { new: true }
    )
    return data
  }
}

module.exports = new UserService()
