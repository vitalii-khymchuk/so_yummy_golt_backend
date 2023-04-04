module.exports = {
  SuccessResponse: {
    type: 'object',
    properties: {
      code: {
        type: 'integer',
        description: 'Server response status code',
        example: 200,
      },
      message: {
        type: 'string',
        description: 'Server response message',
        example: 'success',
      },
      data: {
        description:
          'An object or array of objects in the response from the server',
        items: {},
      },
    },
  },
}
