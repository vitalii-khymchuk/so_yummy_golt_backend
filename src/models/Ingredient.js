const { model, Schema } = require('mongoose')
const { handleMongooseError } = require('@helpers')

const ingredientSchema = new Schema()
ingredientSchema.post('save', handleMongooseError)

const Ingredient = model('ingradient', ingredientSchema)

module.exports = { Ingredient }
