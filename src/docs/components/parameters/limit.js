module.exports = {
  limitParam: {
    name: 'limit',
    in: 'query',
    description: 'The maximum number of items in a paginated list. Maximum 50.',
    required: false,
    schema: {
      type: 'integer',
      minimum: 1,
      maximum: 50,
      default: 12,
    },
  },
}
