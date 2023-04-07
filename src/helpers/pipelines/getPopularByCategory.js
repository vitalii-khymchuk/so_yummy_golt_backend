const {
  calculatePopularityOfRecipes,
} = require('./calculatePopularityOfRecipes')

/**
 * addCheckedFieldsToRecipes
 * @param {number} limit amount of recipes
 * @param {string} categoryName Name of recipes category
 * @returns {array} returns pipeline to aggregation
 */
const getPopularByCategory = ({ limit = 8, categoryName }) => {
  const filterByCategory = [
    {
      $match: {
        'category.category': { $regex: new RegExp(categoryName, 'i') },
      },
    },
    {
      $limit: Number(limit),
    },
  ]
  return [...calculatePopularityOfRecipes(null), ...filterByCategory]
}

module.exports = { getPopularByCategory }
