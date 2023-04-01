module.exports = {
  patch: {
    tags: ['Recipes'],
    summary: 'Add recipe to favorite',
    description: 'This route adds the recipe to favorite',
    operationId: 'favorite-add',
    security: [
      {
        BearerAuth: [],
      },
    ],
    parameters: [
      {
        name: 'recipeId',
        in: 'path',
        description: 'Recipe ID',
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
      404: {
        description: 'Not found',
      },
      500: {
        description: 'Server error',
      },
    },
  },
}
