// apply to Recipe model

/**
 * addCheckedFieldsToRecipes
 * @param {object} userId Mongoose ObjectId() of user
 * @param {object} recipeId Mongoose ObjectId() of recipe
 * @returns {array} returns pipeline to aggregation
 */
const addCheckedFieldsToRecipes = (userId, recipeId) => {
  return [
    {
      $match: { _id: recipeId },
    },
    {
      $unwind: {
        path: '$ingredients',
      },
    },
    {
      $lookup: {
        from: 'users',
        pipeline: [
          {
            $match: {
              _id: userId,
            },
          },
        ],
        as: 'currentUser',
      },
    },
    {
      $unwind: {
        path: '$currentUser',
      },
    },
    {
      $addFields: {
        ingredients: {
          $mergeObjects: [
            '$ingredients',
            {
              isChecked: {
                $reduce: {
                  input: {
                    $map: {
                      input: '$currentUser.shoppingList',
                      as: 'item',
                      in: {
                        $cond: {
                          if: {
                            $and: [
                              { $eq: ['$$item.id', '$ingredients.id'] },
                              { $eq: ['$$item.recipeId', '$_id'] },
                            ],
                          },
                          then: true,
                          else: false,
                        },
                      },
                    },
                  },
                  initialValue: false,
                  in: {
                    $or: ['$$value', '$$this'],
                  },
                },
              },
            },
          ],
        },
      },
    },
    {
      $group: {
        _id: '$_id',
        ingredients: {
          $push: '$ingredients',
        },
        title: {
          $first: '$title',
        },
        category: {
          $first: '$category',
        },
        area: {
          $first: '$area',
        },
        instructions: {
          $first: '$instructions',
        },
        description: {
          $first: '$description',
        },
        thumb: {
          $first: '$thumb',
        },
        preview: {
          $first: '$preview',
        },
        time: {
          $first: '$time',
        },
        popularity: {
          $first: '$popularity',
        },
        youtube: {
          $first: '$youtube',
        },
        tags: {
          $first: '$tags',
        },
        createdAt: {
          $first: '$createdAt',
        },
        updatedAt: {
          $first: '$updatedAt',
        },
        owner: {
          $first: '$owner',
        },
        isPublic: {
          $first: '$isPublic',
        },
      },
    },
  ]
}

module.exports = { addCheckedFieldsToRecipes }
