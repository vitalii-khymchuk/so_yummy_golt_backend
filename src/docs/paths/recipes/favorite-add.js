module.exports = {
  patch: {
    tags: ['RecipesFavorite'],
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
        $ref: '#/components/parameters/recipeIdParam',
      },
    ],
    responses: {
      200: {
        description: 'Add to favorite success',
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
                      type: 'object',
                      allOf: [
                        {
                          $ref: '#/components/schemas/Recipe',
                        },
                        {
                          properties: {
                            ingredients: {
                              type: 'array',
                              items: {
                                $ref: '#/components/schemas/RecipeIngredient',
                              },
                            },
                          },
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
      404: {
        description: 'Not found',
      },
      409: {
        description: 'Recipe already in favorites',
      },
      500: {
        description: 'Server error',
      },
    },
  },
}
