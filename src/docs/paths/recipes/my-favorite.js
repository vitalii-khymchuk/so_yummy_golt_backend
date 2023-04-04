module.exports = {
  get: {
    tags: ['RecipesFavorite'],
    summary: 'Get the favorite recipes of the current user',
    description: 'This route returns the favorite recipes of the current user',
    operationId: 'my-favorite',
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
