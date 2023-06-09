module.exports = {
  post: {
    tags: ['Auth'],
    summary: 'Log out user',
    description: 'This route logs the user out',
    operationId: 'logout',
    security: [
      {
        BearerAuth: [],
      },
    ],
    responses: {
      200: {
        description: 'The user is logged out',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              allOf: [
                {
                  $ref: '#/components/schemas/SuccessResponse',
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
  },
}
