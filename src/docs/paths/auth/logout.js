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
    parameters: [
      {
        $ref: '#/components/parameters/authorizationParam',
      },
    ],
    responses: {
      200: {
        description: 'The user is logged out.',
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
