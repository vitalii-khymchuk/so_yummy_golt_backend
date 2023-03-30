module.exports = {
  post: {
    tags: ['Auth operations'],
    description: 'User registration',
    operationId: 'signup',
    parameters: [],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/???',
          },
        },
      },
    },
    responses: {
      201: {
        description: 'Registration success',
      },
      500: {
        description: 'Server error',
      },
    },
  },
}
