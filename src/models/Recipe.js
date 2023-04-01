const { Schema, model, SchemaTypes } = require('mongoose')
const { handleMongooseError } = require('@helpers')
const Joi = require('joi')

const recipeSchema = new Schema({
  title: {
    type: String,
    minLength: 3,
    maxLength: 35,
    trim: true,
  },
  category: {
    type: SchemaTypes.ObjectId,
    ref: 'categories',
    required: true,
  },
  area: {
    type: 'String',
    minLength: 3,
    maxLength: 15,
    trim: true,
    default: 'none',
  },
  instruction: {
    type: String,
    minLength: 3,
    maxLength: 315,
    required: true,
    trim: true,
  },
})
