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
                        required: ['id', 'amount', 'measure'],
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
                        },
                      },
                      example: [
                        {
                          id: '640c2dd963a319ea671e372c',
                          recipeId: [
                            '319eaa36d79632c71e640c2d',
                            '6d93a312d71e372c9ea6640c',
                          ],
                          amount: '1',
                          measure: 'tbsp',
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
