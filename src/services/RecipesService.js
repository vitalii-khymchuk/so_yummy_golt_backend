const { Recipe } = require('@models')
const { pipelines } = require('@helpers')
const ObjectId = require('mongodb').ObjectId

class RecipesService {
  getSearchMatch(searchParams) {
    const { owner, title, ingredientsIds, ids } = searchParams

    const match = {
      $or: [{ isPublic: true }, { owner }],
    }

    if (title) {
      match.title = { $regex: title, $options: 'i' }
    }

    if (ingredientsIds) {
      match['ingredients.id'] = {
        $in: [...ingredientsIds],
      }
    }

    if (ids) {
      match._id = {
        $in: [...ids],
      }
    }

    return match
  }

  async searchAll(searchParams, searchOptions = {}) {
    const match = this.getSearchMatch(searchParams)
    const data = await Recipe.find(
      match,
      '-createdAt -updatedAt',
      searchOptions
    )

    if (!data) {
      throw new Error('Database error')
    }

    const total = await Recipe.countDocuments(match)

    return {
      total,
      data,
    }
  }

  async searchById(id, owner) {
    return await Recipe.aggregate(
      pipelines.addIngredientsFieldsToRecipe(ObjectId(id), ObjectId(owner))
    )
  }

  async createNew(data) {
    return await Recipe.create({ ...data })
  }

  async removeOwnById(_id, owner) {
    return await Recipe.findOneAndRemove({ _id, owner })
  }

  async getUserRecipes(userId, options = {}) {
    const data = await Recipe.find(
      { owner: userId },
      '-createdAt -updatedAt',
      options
    )
    const total = await Recipe.countDocuments({ owner: userId })
    return { data, total }
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
