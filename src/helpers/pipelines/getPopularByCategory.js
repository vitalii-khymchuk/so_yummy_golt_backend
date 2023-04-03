const {
  calculatePopularityOfRecipes,
} = require('./calculatePopularityOfRecipes')

const getPopularByCategory = ({ amount = 8, categoryName }) => {
  const filterByCategory = [
    {
      $match: { category: categoryName },
    },
    ]
    return [...calculatePopularityOfRecipes(amount), ...filterByCategory]
}

module.exports = { getPopularByCategory }