module.exports = {
  get: {
    tags: ['Recipes'],
    summary: 'Get the recipe by ID',
    description: 'This route returns the recipe by ID',
    operationId: 'recipeId',
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
        description: 'Information found',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Recipe',
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
