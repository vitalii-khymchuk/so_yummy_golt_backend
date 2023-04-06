module.exports = {
  User: {
    type: 'object',
    required: ['name', 'email', 'password'],
    properties: {
      _id: {
        type: 'string',
        description: 'Backend-generated unique identifier.',
        example: '63fa1eb8ed1b46fa6fd8e857',
      },
      name: {
        type: 'string',
        description: "User's name",
        example: 'John Smith',
      },
      email: {
        type: 'string',
        description: "User's email",
        example: 'smith@mail.com',
      },
      avatarURL: {
        type: 'string',
        description: "User's avatar URL",
        example:
          'https://s.gravatar.com/avatar/068de491621f7014bb5f8b3d473f50a3?s=250',
      },
      favorites: {
        type: 'array',
        description:
          "User's collection of favorite recipes (array of ObjectId)",
        items: {
          type: 'string',
          description: 'Receipt ID',
          example: '63fa1eb8ed1b46fa6fd8e857',
        },
      },
      shoppingList: {
        type: 'array',
        description: "User's collection of products to shop (array of Objects)",
        items: {
          type: 'object',
          required: ['id', 'recipeId', 'amount', 'measure'],
          properties: {
            id: {
              type: 'string',
              description: "Ingredient's item ID",
              example: '640c2dd963a319ea671e372c',
            },
            recipeId: {
              type: 'string',
              description: "Recipe's ID",
              example: 'c2dd963a64ea671372c0319e',
            },
            amount: {
              type: 'string',
              description: "Ingredient's item amount (quantity)",
              example: '1',
            },
            measure: {
              type: 'string',
              description: "Ingredient's item measurement units",
              example: 'tbsp',
            },
          },
        },
      },
    },
  },
}
