const { Ingredient } = require('@models')

class IngredientsService {
  async getList() {
    return await Ingredient.find()
  }

  async searchByTitle(title) {
    return await Ingredient.find({ ttl: { $regex: title, $options: 'i' } })
  }

  async searchIdsByTitle(title) {
    return await Ingredient.find(
      { ttl: { $regex: title, $options: 'i' } },
      { _id: 1 }
    )
  }
}

module.exports = new IngredientsService()
