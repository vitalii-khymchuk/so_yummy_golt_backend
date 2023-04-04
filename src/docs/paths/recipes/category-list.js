module.exports = {
  get: {
    tags: ['RecipesCategories'],
    summary: 'Get categories list',
    description: 'This route returns categories list',
    operationId: 'categoryList',
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
                      items: {
                        type: 'string',
                      },
                      example: [
                        'Beef',
                        'Breakfast',
                        'Chicken',
                        'Dessert',
                        'Goat',
                        'Lamb',
                        'Miscellaneous',
                        'Pasta',
                        'Pork',
                        'Seafood',
                        'Side',
                        'Starter',
                        'Vegan',
                        'Vegetarian',
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
