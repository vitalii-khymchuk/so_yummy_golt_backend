const { Ingredient } = require('@models')

class ingredientsService {
    async getList() {
    return await Ingredient.find()
}
}

module.exports = new ingredientsService