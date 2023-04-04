module.exports = {
  get: {
    tags: ['RecipesPages'],
    summary: 'Get the recipes by categories for the main page',
    description:
      'This route return the recipes by categories for the main page',
    operationId: 'mainPage',
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
                      items: {
                        type: 'object',
                        properties: {
                          category: {
                            type: 'string',
                            description: "Categorie's name",
                            example: 'Breakfast',
                          },
                          recipes: {
                            type: 'array',
                            description: 'List of category recipes',
                            items: {
                              $ref: '#/components/schemas/Recipe',
                            },
                          },
                        },
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
