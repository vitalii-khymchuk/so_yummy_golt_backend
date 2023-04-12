module.exports = {
  RecipeIngredient: {
    type: 'object',
    required: ['id', 'amount', 'measure'],
    properties: {
      id: {
        type: 'string',
        description: "Ingredient's item ID",
        example: '640c2dd963a319ea671e372c',
      },
      amount: {
        type: 'string',
        description: "Ingredient's item amount (quantity)",
        example: '1',
      },
      measure: {
        type: 'string',
        description: "Ingredient's item measurement units",
        example: 'tbsp',
      },
    },
  },
}
