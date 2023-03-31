module.exports = {
  get: {
    tags: ['Auth'],
    summary: 'Get information about the current user',
    description: 'This route return information about the current user',
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
              $ref: '#/components/schemas/User',
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
