/**
 * addIngredientsFieldsToRecipe - Adds ingredients data into recipe object
 * @param {ObjectId} recipeId Mongoose ObjectId() of recipe
 * @returns {array} returns pipeline to aggregation
 */
const addIngredientsFieldsToRecipe = recipeId => {
  return [
    {
      $match: {
        _id: recipeId,
      },
    },
    {
      $lookup: {
        from: 'ingredients',
        localField: 'ingredients.id',
        foreignField: '_id',
        as: 'ingr_nfo',
      },
    },
    {
      $set: {
        ingredients: {
          $map: {
            input: '$ingredients',
            in: {
              $mergeObjects: [
                '$$this',
                {
                  $arrayElemAt: [
                    '$ingr_nfo',
                    {
                      $indexOfArray: ['$ingr_nfo._id', '$$this.id'],
                    },
                  ],
                },
              ],
            },
          },
        },
      },
    },
    {
      $unset: ['ingr_nfo', 'ingredients.id'],
    },
  ]
}

module.exports = { addIngredientsFieldsToRecipe }
