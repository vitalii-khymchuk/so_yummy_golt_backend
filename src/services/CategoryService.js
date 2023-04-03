const { Category } = require('@models')
const { pipelines } = require('@helpers')

class CategoryService {
  async getMainPageRecipes({ categoriesLimit, recipesInCategory }) {
    return await Category.aggregate(
      pipelines.mainPage({ categoriesLimit, recipesInCategory })
    )
  }
}

module.exports = new CategoryService()
