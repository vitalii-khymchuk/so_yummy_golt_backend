module.exports = {
  post: {
    tags: ['Auth'],
    summary: 'Register a new user',
    description: 'This route registers the user',
    operationId: 'signup',
    parameters: [],
    requestBody: {
      description: 'An example of a request object for creating a new user',
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
      201: {
        description: 'Registration success',
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
                    code: {
                      example: 201,
                    },
                    data: {
                      $ref: '#/components/schemas/User',
                    },
                    token: {
                      type: 'string',
                      description: "User's auth token",
                      example:
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
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
      409: {
        description: 'Provided email already exists',
      },
      500: {
        description: 'Server error',
      },
    },
  },
}
