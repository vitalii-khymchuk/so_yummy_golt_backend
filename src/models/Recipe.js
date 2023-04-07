const { Schema, model } = require('mongoose')
const { handleMongooseError } = require('@helpers')
const Joi = require('joi')

Joi.objectId = require('joi-objectid')(Joi)

const urlRegExp = /^(http|https):\/\//
const urlMessge = 'URL must start with "http://" or "https://"'
const urlSchema = {
  type: String,
  minLength: 3,
  trim: true,
  match: [urlRegExp, urlMessge],
}

const recipeIngredientSchema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
      ref: 'ingredient',
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    measure: {
      type: String,
      default: '',
    },
  },
  { _id: false }
)

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      minLength: 3,
      maxLength: 50,
      trim: true,
      required: [true, 'Set a title for the recipe'],
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'category',
      required: true,
    },
    area: {
      type: 'String',
      minLength: 2,
      trim: true,
      default: null,
    },
    instructions: {
      type: String,
      minLength: 3,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      minLength: 5,
      maxLength: 350,
      required: true,
      trim: true,
    },
    thumb: {
      ...urlSchema,
      required: true,
    },
    preview: {
      ...urlSchema,
      required: true,
    },
    time: {
      type: String,
      minLength: 1,
      maxLength: 20,
      required: true,
      trim: true,
    },
    popularity: {
      type: Number,
      default: 0,
    },
    youtube: {
      ...urlSchema,
      default: null,
    },
    tags: {
      type: Array,
      default: [],
    },
    ingredients: [recipeIngredientSchema],
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    isPublic: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

recipeSchema.post('save', handleMongooseError)

const addSchema = Joi.object({
  title: Joi.string().min(3).max(50).required(),
  category: Joi.objectId().required(),
  area: Joi.string().min(2),
  instructions: Joi.string().min(3).required(),
  description: Joi.string().min(5).max(350).required(),
  time: Joi.string().min(1).max(20).required(),
  youtube: Joi.string().min(3).pattern(urlRegExp, urlMessge),
  tags: Joi.array(),
  ingredients: Joi.array()
    .unique('id')
    .items({
      id: Joi.objectId().required(),
      amount: Joi.string().required(),
      measure: Joi.string(),
    })
    .required(),
  isPublic: Joi.boolean(),
})

const recipeSchemas = { addSchema }

const Recipe = model('recipe', recipeSchema)

module.exports = {
  Recipe,
  recipeSchemas,
}
