const { Schema, model, SchemaTypes } = require('mongoose')
const { handleMongooseError } = require('@helpers')
const Joi = require('joi')

const urlRegExp = /^(http|https):\/\//
const urlSchema = {
  type: String,
  minLength: 3,
  maxLength: 40,
  trim: true,
  match: [urlRegExp, 'URL must start with "http://" or "https://"'],
}

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      minLength: 3,
      maxLength: 35,
      trim: true,
      required: true,
    },
    category: {
      type: SchemaTypes.ObjectId,
      ref: 'category',
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
      maxLength: 615,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      minLength: 3,
      maxLength: 315,
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
      maxLength: 12,
      required: true,
      trim: true,
    },
    popularity: {
      type: Number,
      default: 0,
    },
    youtube: {
      ...urlSchema,
      default: 'none',
    },
    tags: {
      type: Array,
      default: [],
    },
    ingredients: {
      type: Array,
      required: true,
    },
    owner: { type: SchemaTypes.ObjectId, ref: 'user', required: true },
    isPublic: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
)

recipeSchema.post('save', handleMongooseError)

const postRecipeSchema = Joi.object({
  title: Joi.string().min(3).max(50).required(),
  category: Joi.object({ $oid: Joi.string() }).required(),
  instruction: Joi.string().min(3).max(615).required(),
  description: Joi.string().min(3).max(315).required(),
  time: Joi.string().min(1).max(12).required(),
  youtube: Joi.string()
    .min(3)
    .max(40)
    .matches(urlRegExp, 'URL must start with "http://" or "https://"'),
  ingredients: Joi.array()
    .items(Joi.object({ $oid: Joi.string() }))
    .required(),
  isPublic: Joi.bool(),
})

const recipeBodySchemas = { postRecipe }

const Recipe = model('recipe', recipeSchema)

module.exports = { recipeBodySchemas, Recipe }
