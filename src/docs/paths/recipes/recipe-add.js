module.exports = {
  post: {
    tags: ['Recipes'],
    summary: 'Create a new recipe',
    description: 'This route creates the recipe',
    operationId: 'recipe-add',
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
    requestBody: {
      description: 'An example of a request object for creating a new recipe',
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            required: [
              'title',
              'description',
              'time',
              'instructions',
              'category',
              'ingredients',
            ],
            properties: {
              title: {
                type: 'string',
                description: "Recipe's title",
                example: 'Banana Pancakes',
              },
              description: {
                type: 'string',
                description: "Recipe's description (about) text",
                example:
                  'In a bowl, mash the banana with a fork until it resembles a thick purée...',
              },
              time: {
                type: 'string',
                description: "Recipe's cooking time value",
                example: '10 min',
              },
              instructions: {
                type: 'string',
                description: "Recipe's preparation steps describe text",
                example:
                  '1. Gather all ingredients. 2. Combine flour, white sugar, baking powder, and salt in a bowl. Mix together egg, milk, vegetable oil, and bananas in a second bowl. 3. Stir flour mixture into banana mixture; batter will be slightly lumpy. 4. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. 5. Cook until pancakes are golden brown, 3 to 5 minutes per side. Serve hot. 6. Serve hot and enjoy!',
              },
              category: {
                type: 'string',
                description: "Recipe's category name",
                example: 'Breakfast',
              },
              ingredients: {
                type: 'array',
                description: "Recipe's ingredients list",
                items: {
                  type: 'object',
                  required: ['id', 'amount', 'measure'],
                  properties: {
                    id: {
                      type: 'string',
                      description: "Ingredient's item ID",
                      example: '640c2dd963a319ea671e372c',
                    },
                    amount: {
                      type: 'number',
                      description: "Ingredient's item amount (quantity)",
                      example: 1.5,
                    },
                    measure: {
                      type: 'string',
                      description: "Ingredient's item measurement units",
                      example: 'tbsp',
                    },
                  },
                },
                example: [
                  {
                    id: '640c2dd963a319ea671e372c',
                    amount: 1,
                    measure: 'tbsp',
                  },
                ],
              },
              // thumb: {
              //   type: 'string',
              //   format: 'binary',
              //   description: "Recipe's image URL",
              // example:
              //   'https://s.gravatar.com/avatar/068de491621f7014bb5f8b3d473f50a3?s=250',
              // default: 'https://placehold.co/300x323?text=Recipe+name',
              // },
              youtube: {
                type: 'string',
                description: "Recipe's youtube video link",
                example: 'https://www.youtube.com/watch?v=-gF8d-fitkU',
                default: null,
              },
              isPublic: {
                type: 'boolean',
                description: "Recipe's publicity status",
                example: true,
                default: false,
              },
            },
          },
        },
        'multipart/form-data': {
          schema: {
            type: 'object',
            properties: {
              thumb: {
                type: 'string',
                format: 'binary',
                description: "Recipe's image",
              },
            },
          },
        },
      },
    },
    responses: {
      201: {
        description: 'Create success',
      },
      400: {
        description: 'Bad request (invalid request body)',
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
