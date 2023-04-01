module.exports = {
  delete: {
    tags: ['Recipes'],
    summary: 'Delete recipe from favorite',
    description: 'This route removes the recipe from favorite',
    operationId: 'favorite-delete',
    security: [
      {
        BearerAuth: [],
      },
    ],
    parameters: [
      {
        $ref: '#/components/parameters/recipeIdParam',
      },
      {
        $ref: '#/components/parameters/authorizationParam',
      },
    ],
    responses: {
      204: {
        description: 'Delete from favorite success',
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
