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
            required: ['id', 'amount', 'measure'],
            properties: {
              id: {
                type: 'string',
                description: "Ingredient's item ID",
                example: '640c2dd963a319ea671e372c',
              },
              amount: {
                type: 'number',
                description: "Ingredient's item amount (quantity)",
                example: 1.5,
              },
              measure: {
                type: 'string',
                description: "Ingredient's item measurement units",
                example: 'tbsp',
              },
            },
            example: {
              id: '640c2dd963a319ea671e372c',
              amount: 1,
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
              example: {
                status: true,
              },
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
