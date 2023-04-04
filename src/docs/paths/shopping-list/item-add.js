module.exports = {
  post: {
    tags: ['ShoppingList'],
    summary: 'Add product to the shopping list',
    description: 'This route adds product to the shopping list',
    operationId: 'shopping-list-item-add',
    security: [
      {
        BearerAuth: [],
      },
    ],
    parameters: [
      {
        $ref: '#/components/parameters/authorizationParam',
      },
    ],
    requestBody: {
      description: 'An example of a request object for creating a new product',
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            description: 'Shopping list product',
            required: ['recipeId', 'id', 'amount', 'measure'],
            properties: {
              recipeId: {
                type: 'string',
                description: "Recipe's ID",
                example: '640c2dd963a319ea671e372c',
              },
              id: {
                type: 'string',
                description: "Ingredient's item ID",
                example: '640c2dd963a319ea671e372c',
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
            example: {
              recipeId: '319eaa36d79632c71e640c2d',
              id: '640c2dd963a319ea671e372c',
              amount: '1',
              measure: 'tbsp',
            },
          },
        },
      },
    },
    responses: {
      201: {
        description: 'Add to favorite success',
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
                      type: 'object',
                      properties: {
                        recipeId: {
                          type: 'string',
                          description: "Recipe's ID",
                          example: '640c2dd963a319ea671e372c',
                        },
                        id: {
                          type: 'string',
                          description: "Ingredient's item ID",
                          example: '640c2dd963a319ea671e372c',
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
