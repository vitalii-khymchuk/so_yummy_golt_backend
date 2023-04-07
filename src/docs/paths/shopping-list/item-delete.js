module.exports = {
  delete: {
    tags: ['ShoppingList'],
    summary: 'Delete product from the shopping list',
    description: 'This route removes product from the shopping list',
    operationId: 'shopping-list-item-delete',
    security: [
      {
        BearerAuth: [],
      },
    ],
    parameters: [
      {
        $ref: '#/components/parameters/productIdParam',
      },
    ],
    requestBody: {
      description: 'An example of a request object to remove product',
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            description: 'Shopping list product',
            required: ['recipeId'],
            properties: {
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
            },
            example: {
              recipeId: [
                '319eaa36d79632c71e640c2d',
                '6d93a312d71e372c9ea6640c',
              ],
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Product was successfully deleted',
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
                    data: null,
                  },
                },
              ],
            },
          },
        },
      },
      400: {
        description: 'Missed or empty recipeId array',
      },
      401: {
        description: 'Missing header with authorization token',
      },
      404: {
        description: 'Not found',
      },
      500: {
        description: 'Server error',
      },
    },
  },
}
