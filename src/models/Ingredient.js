const { model, Schema } = require('mongoose')
const { handleMongooseError } = require('@helpers')

const ingredientSchema = new Schema({
  ttl: {
    type: String,
    minLength: 3,
    trim: true,
    required: [true, 'Set a title for the ingredient'],
  },
  desc: {
    type: String,
    minLength: 3,
    trim: true,
    required: [true, 'Set a description for the ingredient'],
  },
  t: {
    type: String,
    trim: true,
    default: '',
  },
  thb: {
    type: String,
    trim: true,
    defult: '',
  },
})

ingredientSchema.post('save', handleMongooseError)

const Ingredient = model('ingredient', ingredientSchema)

module.exports = { Ingredient }
