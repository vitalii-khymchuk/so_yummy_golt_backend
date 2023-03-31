module.exports = {
  post: {
    tags: ['Auth'],
    summary: 'Login user',
    description: 'This route logs the user in',
    operationId: 'signin',
    parameters: [],
    requestBody: {
      description: 'An example of a request object for user login',
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            required: ['email', 'password'],
            properties: {
              email: {
                type: 'string',
                description: 'E-mail address',
                example: 'smith@mail.com',
              },
              password: {
                type: 'string',
                description: 'Password',
                example: 'hjdf5sx76ggsx',
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: 'User is logged in',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/User',
            },
          },
        },
      },
      400: {
        description: 'Bad request (invalid request body)',
      },
      401: {
        description: 'Login error',
      },
      500: {
        description: 'Server error',
      },
    },
  },
}
