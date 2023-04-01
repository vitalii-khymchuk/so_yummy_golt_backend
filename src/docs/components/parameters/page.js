module.exports = {
  pageParam: {
    name: 'page',
    in: 'query',
    description: 'Specify the page',
    required: false,
    style: 'form',
    explode: true,
    schema: {
      type: 'integer',
      default: 1,
    },
  },
}
