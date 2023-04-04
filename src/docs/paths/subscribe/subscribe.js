module.exports = {
  post: {
    tags: ['Subscribe'],
    summary: 'Subscribe email',
    description: 'This route subscribes provided email to the newsletter',
    operationId: 'subscribe',
    security: [
      {
        BearerAuth: [],
      },
    ],
    requestBody: {
      description: 'An example of a request object for subscribing',
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            required: ['email'],
            properties: {
              email: {
                type: 'string',
                description: 'Email to subscribe',
                example: 'example@mail.com',
              },
            },
          },
        },
      },
    },
    responses: {
      201: {
        description: 'The email was successfully subscribed',
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
                    data: null,
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
      409: {
        description: 'Provided email already subscribed',
      },
      500: {
        description: 'Server error',
      },
    },
  },
}
