const { Ingredient } = require('@models')

class IngredientsService {
  async getList() {
    return await Ingredient.find()
  }
}

module.exports = new IngredientsService()
