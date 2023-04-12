module.exports = {
  Recipe: {
    type: 'object',
    required: [
      'title',
      'category',
      'instructions',
      'description',
      'time',
      'ingredients',
    ],
    properties: {
      _id: {
        type: 'string',
        description: 'Backend-generated unique identifier',
        example: '63fa1eb8ed1b46fa6fd8e857',
      },
      title: {
        type: 'string',
        description: "Recipe's title",
        example: 'Banana Pancakes',
      },
      description: {
        type: 'string',
        description: "Recipe's description (about) text",
        example:
          'In a bowl, mash the banana with a fork until it resembles a thick purée...',
      },
      time: {
        type: 'string',
        description: "Recipe's cooking time value",
        example: '10 min',
      },
      instructions: {
        type: 'string',
        description: "Recipe's preparation steps describe text",
        example:
          '1. Gather all ingredients. 2. Combine flour, white sugar, baking powder, and salt in a bowl. Mix together egg, milk, vegetable oil, and bananas in a second bowl. 3. Stir flour mixture into banana mixture; batter will be slightly lumpy. 4. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. 5. Cook until pancakes are golden brown, 3 to 5 minutes per side. Serve hot. 6. Serve hot and enjoy!',
      },
      category: {
        type: 'string',
        description: "Recipe's category id",
        example: '64284d2e5cc669661c595916',
      },
      ingredients: {
        type: 'array',
        description: "Recipe's ingredients list",
        items: {
          $ref: '#/components/schemas/RecipeIngredient',
        },
      },
      thumb: {
        type: 'string',
        description: "Recipe's image URL",
        example:
          'https://s.gravatar.com/avatar/068de491621f7014bb5f8b3d473f50a3?s=250',
        default: 'https://placehold.co/300x323?text=Recipe+name',
      },
      youtube: {
        type: 'string',
        description: "Recipe's youtube video link",
        example: 'https://www.youtube.com/watch?v=-gF8d-fitkU',
        default: null,
      },
      isPublic: {
        type: 'boolean',
        description: "Recipe's publicity status",
        example: true,
        default: false,
      },
      owner: {
        type: 'string',
        description: "Backend-generated recipe's author ID",
        example: '6404685147b1474033766547',
      },
      popularity: {
        type: 'integer',
        description: "Backend-generated recipe's popularity value",
        example: 100,
        default: 0,
      },
      createdAt: {
        type: 'string',
        description: "Backend-generated recipe's creation timestamp",
        example: '2023-03-05T11:59:52.259+00:00',
      },
      updatedAt: {
        type: 'string',
        description: "Backend-generated recipe's updating timestamp",
        example: '2023-03-05T12:04:23.982+00:00',
      },
    },
  },
}
