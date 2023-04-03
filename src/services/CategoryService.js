const { Category } = require('@models')
const { pipelines } = require('@helpers')

class CategoryService {
  async getMainPageRecipes({ categoriesNum, recipesInCategory }) {
    return await Category.aggregate(
      pipelines.mainPage({ categoriesNum, recipesInCategory })
    )
  }
}

module.exports = new CategoryService