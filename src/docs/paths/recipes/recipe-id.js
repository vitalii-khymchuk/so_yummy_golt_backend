module.exports = {
  get: {
    tags: ['Recipes'],
    summary: 'Get the recipe by ID',
    description: 'This route returns the recipe by ID',
    operationId: 'recipeId',
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
