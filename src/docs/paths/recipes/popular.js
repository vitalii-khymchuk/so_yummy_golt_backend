module.exports = {
  get: {
    tags: ['RecipesPages'],
    summary: 'Get the popular recipes',
    description: 'This route returns the popular recipes',
    operationId: 'popular',
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
