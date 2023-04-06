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
                        type: 'object',
                        properties: {
                          _id: {
                            type: 'string',
                            description: 'Category id',
                            example: '64284d2e5cc669661c595915',
                          },
                          category: {
                            type: 'string',
                            description: 'Category name',
                            example: 'Beef',
                          },
                        },
                      },
                      example: [
                        {
                          _id: '64284d2e5cc669661c595915',
                          category: 'Beef',
                        },
                        {
                          _id: '64284d2e5cc669661c595916',
                          category: 'Breakfast',
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
