module.exports = {
  get: {
    tags: ['RecipesIngredients'],
    summary: 'Get the ingredients list',
    description: 'This route returns the recipes ingredients list',
    operationId: 'igredients-list',
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
                  $ref: '#/components/schemas/SuccessResponse',
                },
                {
                  properties: {
                    data: {
                      type: 'array',
                      description: 'Ingredients list',
                      items: {
                        $ref: '#/components/schemas/Ingredient',
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
      500: {
        description: 'Server error',
      },
    },
  },
}
