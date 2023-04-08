module.exports = {
  get: {
    tags: ['ShoppingList'],
    summary: 'Get the shopping list products',
    description: 'This route returns the shopping list products',
    operationId: 'shopping-list-items',
    security: [
      {
        BearerAuth: [],
      },
    ],
    responses: {
      200: {
        description: 'Information found',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              allOf: [
                {
                  $ref: '#/components/schemas/SuccessResponse',
                },
                {
                  properties: {
                    data: {
                      type: 'array',
                      description: 'Shopping list products',
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
                            type: 'array',
                            description: "Recipe's IDs",
                            items: {
                              type: 'string',
                            },
                            example: [
                              '640c2dd963a319ea671e372c',
                              '6d93a312d71e372c9ea6640c',
                            ],
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
                          ttl: {
                            type: 'string',
                            description: "Ingredient's item title",
                            example: 'Sugar',
                          },
                          desc: {
                            type: 'string',
                            description: "Ingredient's item measurement units",
                            example: 'tbsp',
                          },
                          thb: {
                            type: 'string',
                            description: "Ingredient's image URL",
                            example:
                              'https://s.gravatar.com/avatar/068de491621f7014bb5f8b3d473f50a3?s=250',
                          },
                        },
                      },
                      example: [
                        {
                          id: '640c2dd963a319ea671e373b',
                          recipeId: [
                            '642b391c5c598e54d1f9e71b',
                            '642b391c5c598e54d1f9e71b',
                          ],
                          amount: 2,
                          measure: 'pcs',
                          ttl: 'Peanuts',
                          desc: 'A legume with a thin, papery skin and a high oil content, commonly eaten roasted or boiled as a snack, or used in cooking and baking.',
                          thb: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564856/ltc7yw8nvydf1bryb262.png',
                        },
                        {
                          id: '640c2dd963a319ea671e373b',
                          recipeId: [
                            '640cd5ac2d9fecf12e889824',
                            '640cd5ac2d9fecf12e88981f',
                          ],
                          amount: 7,
                          measure: 'tbsp',
                          ttl: 'Peanuts',
                          desc: 'A legume with a thin, papery skin and a high oil content, commonly eaten roasted or boiled as a snack, or used in cooking and baking.',
                          thb: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564856/ltc7yw8nvydf1bryb262.png',
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
      },
      401: {
        description: 'Missing header with authorization token',
      },
      500: {
        description: 'Server error',
      },
    },
  },
}
