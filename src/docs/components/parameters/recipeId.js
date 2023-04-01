module.exports = {
  recipeIdParam: {
    name: 'recipeId',
    in: 'path',
    description: 'Recipe ID',
    example: '63fa1eb8ed1b46fa6fd8e857',
    required: true,
    schema: {
      type: 'string',
    },
  },
}
