module.exports = {
  authorizationParam: {
    name: 'Authorization',
    in: 'header',
    description: 'The token issued to the current user',
    // example: 'Bearer adsjkasnxz.csdcdfgdvgfhgfdcs.saxsa',
    required: true,
    schema: {
      type: 'string',
    },
  },
}
