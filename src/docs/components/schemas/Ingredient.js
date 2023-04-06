module.exports = {
  Ingredient: {
    type: 'object',
    required: ['ttl', 'desc', 'thb'],
    properties: {
      _id: {
        type: 'string',
        description: 'Backend-generated unique identifier',
        example: '640c2dd963a319ea671e372c',
      },
      ttl: {
        type: 'string',
        description: "Ingredient's item title",
        example: 'Sugar',
      },
      desc: {
        type: 'string',
        description: "Ingredient's item measurement units",
        example: 'tbsp',
      },
      thb: {
        type: 'string',
        description: "Ingredient's image URL",
        example:
          'https://s.gravatar.com/avatar/068de491621f7014bb5f8b3d473f50a3?s=250',
      },
    },
  },
}
