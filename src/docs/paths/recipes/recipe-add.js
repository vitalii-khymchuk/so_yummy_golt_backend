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
    requestBody: {
      description: 'An example of a request object for creating a new recipe',
      required: true,
      content: {
        // 'application/json': {
        //   schema: {

        //   },
        // },
        'multipart/form-data': {
          schema: {
            type: 'object',
            required: ['thumb', 'jsonData'],
            properties: {
              thumb: {
                type: 'string',
                format: 'binary',
                description: "Recipe's image",
              },
              jsonData: {
                type: 'string',
                description: `Recipe's JSON stringified object data <br> 
                Example schema:<br>
                <pre>
                { 
                  "title": "My recipe",
                  "description": "My new recipe",
                  "category": "64284d2e5cc669661c595916",
                  "time": "10 min",
                  "ingredients": [
                    { 
                      "id": "640c2dd963a319ea671e365d", 
                      "amount": "500", 
                      "measure": "g" 
                    }
                  ],
                  "isPublic": true,
                  "instructions": "Some text of recipe instructions"
                }</pre>`,
              },
            },
          },
        },
      },
    },
    responses: {
      201: {
        description: 'Create success',
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
                      $ref: '#/components/schemas/Recipe',
                    },
                  },
                },
              ],
            },
          },
        },
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
