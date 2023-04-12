module.exports = {
  delete: {
    tags: ['RecipesFavorite'],
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
    ],
    responses: {
      200: {
        description: 'Delete from favorite success',
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
      500: {
        description: 'Server error',
      },
    },
  },
}
