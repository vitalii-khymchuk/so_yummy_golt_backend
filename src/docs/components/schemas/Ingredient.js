module.exports = {
  Ingredient: {
    type: 'object',
    required: ['title', 'description'],
    properties: {
      _id: {
        type: 'string',
        description: 'Backend-generated unique identifier',
        example: '640c2dd963a319ea671e372c',
      },
      title: {
        type: 'string',
        description: "Ingredient's item title",
        example: 'Banana',
      },
      description: {
        type: 'string',
        description: "Ingredient's item measurement units",
        example: 'tbsp',
      },
      thumb: {
        type: 'string',
        description: "Ingredient's image URL",
        example:
          'https://s.gravatar.com/avatar/068de491621f7014bb5f8b3d473f50a3?s=250',
        default: 'https://placehold.co/128x128?text=Ingredient+name',
      },
      createdAt: {
        type: 'string',
        description: "Backend-generated ingredient's creation timestamp",
        example: '2023-03-05T11:59:52.259+00:00',
      },
      updatedAt: {
        type: 'string',
        description: "Backend-generated ingredient's updating timestamp",
        example: '2023-03-05T12:04:23.982+00:00',
      },
    },
  },
}
