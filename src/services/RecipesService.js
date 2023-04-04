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
    return await Recipe.findById(id)
  }

  async createNew(data) {
    return await Recipe.create({ ...data })
  }

  async removeOwnById(_id, owner) {
    return await Recipe.findOneAndRemove({ _id, owner })
  }

  async getUserRecipes(userId) {
    return await Recipe.find({ owner: userId })
  }

  async getPopular(limit) {
    return await Recipe.aggregate(pipelines.calculatePopularityOfRecipes(limit))
  }

  async getByCategory({ categoryName, limit }) {
    return await Recipe.aggregate(
      pipelines.getPopularByCategory({ categoryName, limit })
    )
  }
}

module.exports = new RecipesService()
