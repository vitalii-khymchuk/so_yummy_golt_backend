//Apply to Recipe model

/**
 * addCheckedFieldsToRecipes
 * @param {number} limit number of documents to return
 * @returns {array} returns pipeline to aggregation
 */
const calculatePopularityOfRecipes = (limit = 4) => {
  return [
    {
      $lookup: {
        from: 'users',
        localField: '_id',
        foreignField: 'favorites',
        as: 'owners',
      },
    },
    {
      $lookup: {
        from: 'categories',
        localField: 'category',
        foreignField: '_id',
        as: 'category',
      },
    },
    {
      $addFields: {
        popularity: {
          $size: '$owners',
        },
      },
    },
    {
      $unset: 'owners',
    },
    {
      $sort: {
        popularity: -1,
      },
    },
    {
      $limit: Number(limit),
    },
  ]
}

module.exports = { calculatePopularityOfRecipes }
