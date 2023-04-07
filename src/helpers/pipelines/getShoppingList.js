//Apply to User model

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
      $unwind: {
        path: '$shoppingList',
      },
    },
    {
      $lookup: {
        from: 'ingredients',
        localField: 'shoppingList.id',
        foreignField: '_id',
        as: 'shoppingList.ingr_inf',
      },
    },
    {
      $unwind: {
        path: '$shoppingList.ingr_inf',
      },
    },
    {
      $group: {
        _id: '$_id',
        shoppingList: {
          $push: '$shoppingList',
        },
      },
    },
  ]
}

module.exports = { getShoppingList }
