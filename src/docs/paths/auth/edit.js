module.exports = {
  patch: {
    tags: ['Auth'],
    summary: 'Update user',
    description: "This route updates user's information",
    operationId: 'edit',
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
