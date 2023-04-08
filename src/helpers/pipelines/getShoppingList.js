// Apply to User model

/**
 * addCheckedFieldsToRecipes
 * @param {object} recipeId Mongoose ObjectId() of user
 * @returns {array} returns pipeline to aggregation
 */
const getShoppingList = userId => {
  return [
    {
      $match: {
        _id: userId,
      },
    },
    {
      $lookup: {
        from: 'ingredients',
        localField: 'shoppingList.id',
        foreignField: '_id',
        as: 'ingr_inf',
      },
    },
    {
      $set: {
        shoppingList: {
          $map: {
            input: '$shoppingList',
            in: {
              $mergeObjects: [
                '$$this',
                {
                  $arrayElemAt: [
                    '$ingr_inf',
                    {
                      $indexOfArray: ['$ingr_inf._id', '$$this.id'],
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
      $unset: ['ingr_inf', 'shoppingList._id', 'shoppingList.t'],
    },
  ]
}

module.exports = { getShoppingList }
