module.exports = {
  get: {
    tags: ['Recipes'],
    summary: 'Get categories list',
    description: 'This route returns categories list',
    operationId: 'categoryList',
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
    responses: {
      200: {
        description: 'Information found',
        content: {
          'application/json': {
            schema: {
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
