const {
  calculatePopularityOfRecipes,
} = require('./calculatePopularityOfRecipes')

/**
 * addCheckedFieldsToRecipes
 * @param {number} amount amount of recipes
 * @param {string} categoryName Name of recipes category
 * @returns {array} returns pipeline to aggregation
 */
const getPopularByCategory = ({ amount = 8, categoryName }) => {
  const filterByCategory = [
    {
      $match: { category: categoryName },
    },
    ]
    return [...calculatePopularityOfRecipes(amount), ...filterByCategory]
}

module.exports = { getPopularByCategory }