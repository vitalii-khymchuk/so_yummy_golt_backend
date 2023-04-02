//apply to Category model

const {
  calculatePopularityOfRecipes,
} = require('./calculatePopularityOfRecipes')

/**
 * mainPage
 * @returns {array} returns pipeline to aggregation
 */
const mainPage = () => {
  return [
    {
      $lookup: {
        from: 'recipes',
        pipeline: [...calculatePopularityOfRecipes()],
        localField: '_id',
        foreignField: 'category',
        let: {
          id: '$_id',
        },
        as: 'recipes',
      },
    },
    {
      $addFields: {
        points: {
          $sum: {
            $map: {
              input: '$recipes',
              as: 'obj',
              in: '$$obj.popularity',
            },
          },
        },
      },
    },
    {
      $project: {
        points: 1,
        category: 1,
        recipes: 1,
      },
    },
    {
      $unwind: {
        path: '$recipes',
      },
    },
    {
      $sort: {
        'recipes.popularity': -1,
      },
    },
    {
      $group: {
        _id: '$_id',
        recipes: {
          $push: '$recipes',
        },
        points: {
          $first: '$points',
        },
        category: {
          $first: '$category',
        },
      },
    },
    {
      $addFields: {
        recipes: {
          $slice: ['$recipes', 0, 4],
        },
      },
    },
    {
      $sort: {
        points: -1,
      },
    },
    {
      $limit: 8,
    },
  ]
}

module.exports = { mainPage }
