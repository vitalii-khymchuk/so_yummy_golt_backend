module.exports = {
  get: {
    tags: ['Recipes'],
    summary: 'Get (search) the recipes list',
    description: 'This route returns the recipes list',
    operationId: 'recipes',
    parameters: [
      {
        $ref: '#/components/parameters/authorizationParam',
      },
      {
        $ref: '#/components/parameters/limitParam',
      },
      {
        $ref: '#/components/parameters/pageParam',
      },
      {
        name: 'filter',
        in: 'query',
        description: 'Recipes list filtering',
        required: false,
        style: 'deepObject',
        explode: true,
        schema: {
          type: 'object',
        },
        examples: {
          filter_by_title: {
            value: {
              title: 'Banana Pancakes',
            },
            summary: 'Filter by title',
          },
          filter_by_ingredients: {
            value: {
              ingredients: 'Banana Pancakes',
            },
            summary: 'Filter by ingredients',
          },
        },
      },
    ],
    responses: {
      200: {
        links: {
          GetRecipeById: {
            operationId: 'recipeId',
            parameters: {
              recipeId: '$response.body#/data.*._id',
            },
            description:
              'The `_id` key value from the array can be used for the `GET /recipes/{recipeId}` operation as the `recipeId` parameter.',
          },
        },
        description: 'Information found. Result in paginated form',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              allOf: [
                {
                  $ref: '#/components/schemas/PaginatedResponse',
                },
                {
                  properties: {
                    data: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/Recipe',
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
    security: [
      {
        BearerAuth: [],
      },
    ],
  },
}
