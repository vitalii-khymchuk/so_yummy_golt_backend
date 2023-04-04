module.exports = {
  put: {
    tags: ['Auth'],
    summary: 'Update user',
    description: "This route updates user's information",
    operationId: 'edit',
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
      description: 'An example of a request object for updating user',
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            required: ['name', 'email', 'password'],
            properties: {
              name: {
                type: 'string',
                description: 'Username',
                example: 'John Smith',
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: 'The user was successfully updated',
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
                      $ref: '#/components/schemas/User',
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
