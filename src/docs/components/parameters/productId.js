module.exports = {
  productIdParam: {
    name: 'productId',
    in: 'path',
    description: 'product ID',
    example: '63fa1eb8ed1b46fa6fd8e857',
    required: true,
    schema: {
      type: 'string',
    },
  },
}
