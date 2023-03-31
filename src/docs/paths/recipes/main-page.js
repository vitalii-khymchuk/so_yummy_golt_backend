module.exports = {
  get: {
    tags: ['Recipes'],
    summary: 'Get the recipes by categories for the main page',
    description:
      'This route return the recipes by categories for the main page',
    operationId: 'current',
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
