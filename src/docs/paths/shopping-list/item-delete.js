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
