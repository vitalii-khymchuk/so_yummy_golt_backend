//Apply to Recipe model

const calculatePopularityOfRecipes = () => {
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
      $addFields: {
        popularity: {
          $size: '$owners',
        },
      },
    },
    {
      $unset: 'owners',
    },
  ]
}

module.exports = { calculatePopularityOfRecipes }
