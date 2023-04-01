module.exports = {
  patch: {
    tags: ['Auth'],
    summary: 'Subscribe user',
    description: 'This route subscribes user to newsletter',
    operationId: 'subscribe',
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
      description: 'An example of a request object for subscribing user',
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            required: ['subscribe'],
            properties: {
              subscribe: {
                type: 'boolean',
                description: 'Subscription status',
                example: 'true',
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: 'The user subscription was successfully updated',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              example: {
                status: true,
              },
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
