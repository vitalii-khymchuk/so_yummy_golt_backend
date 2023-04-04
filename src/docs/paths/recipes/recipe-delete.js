module.exports = {
  delete: {
    tags: ['Recipes'],
    summary: 'Delete the recipe by ID',
    description: 'This route removes the recipe by ID',
    operationId: 'recipe-delete',
    security: [
      {
        BearerAuth: [],
      },
    ],
    parameters: [
      {
        $ref: '#/components/parameters/recipeIdParam',
      },
    ],
    responses: {
      200: {
        description: 'The recipe was successfully deleted',
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
