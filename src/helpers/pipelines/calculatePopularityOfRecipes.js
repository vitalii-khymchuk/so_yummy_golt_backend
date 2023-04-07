//Apply to Recipe model

/**
 * addCheckedFieldsToRecipes
 * @param {number} limit number of documents to return
 * @returns {array} returns pipeline to aggregation
 */
const calculatePopularityOfRecipes = (limit = 4) => {
  const pipeline = [
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
      $match: {
        isPublic: true,
      },
    },
    {
      $sort: {
        popularity: -1,
      },
    },
  ]

  if (limit) {
    pipeline.push({
      $limit: Number(limit),
    })
  }

  return pipeline
}

module.exports = { calculatePopularityOfRecipes }
