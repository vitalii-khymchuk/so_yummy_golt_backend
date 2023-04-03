const { Recipe } = require('@models')
const { pipelines } = require('@helpers')

class RecipesService {
  async searchAll(searchParams = {}, searchOptions = {}) {
    const data = await Recipe.find(
      searchParams,
      '-createdAt -updatedAt',
      searchOptions
    )

    if (!data) {
      throw new Error('Database error')
    }

    const total = await Recipe.countDocuments(searchParams)

    return {
      total,
      data,
    }
  }

  async searchById(id) {
    console.log(id)
    return await Recipe.findById(id)
  }

  async getUserRecipes(userId) {
    return await Recipe.find({ owner: userId })
  }

  async getPopular(amountOfRecipes) {
    return await Recipe.aggregate(
      pipelines.calculatePopularityOfRecipes(amountOfRecipes)
    )
  }

  async getByCategory({ categoryName, amount }) {
    return await Recipe.aggregate(
      pipelines.getPopularByCategory({ categoryName, amount })
    )
  }
}

module.exports = new RecipesService()
