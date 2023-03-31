module.exports = {
  get: {
    tags: ['Recipes'],
    summary: 'Get the recipes by category',
    description: 'This route return the recipes by category',
    operationId: 'category',
    security: [
      {
        BearerAuth: [],
      },
    ],
    parameters: [
      {
        name: 'categoryName',
        in: 'path',
        description: 'Category name',
        required: true,
        schema: {
          type: 'string',
        },
      },
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
              type: 'object',
              allOf: [
                {
                  $ref: '#/components/schemas/PaginatedResponse',
                },
                {
                  properties: {
                    data: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/Recipe',
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
      404: {
        description: 'Not found',
      },
      500: {
        description: 'Server error',
      },
    },
  },
}
