const { Schema, model } = require('mongoose')
const { handleMongooseError } = require('@helpers')
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 25,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 50,
      match: emailRegexp,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    avatarUrl: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      default: null,
    },
    // isVerify: {
    //   type: Boolean,
    //   default: false,
    // },
    // verificationToken: {
    //   type: String,
    //   required: [true, 'Verify token is required'],
    // },
    favorites: {
      type: Array,
      default: [],
    },
    shoppingList: {
      type: Array,
      default: [],
    },
  },
  { versionKey: false, timestamps: true }
)

userSchema.post('save', handleMongooseError)

const signup = Joi.object({
  email: Joi.string()
    .min(3)
    .max(50)
    .email({ tlds: { deny: ['ru'] } })
    .pattern(emailRegexp)
    .required(),
  name: Joi.string().min(4).max(25).required(),
  password: Joi.string().min(6).alphanum().required(),
})

const signin = Joi.object({
  email: Joi.string()
    .min(3)
    .max(50)
    .email({ tlds: { deny: ['ru'] } })
    .pattern(emailRegexp)
    .required(),
  password: Joi.string().min(6).alphanum().required(),
})

const patchUserData = Joi.object({
  name: Joi.string().min(3).max(25).required(),
})

const postShoppingListItem = Joi.object({
  id: Joi.objectId().required(),
  recipeId: Joi.objectId().required(),
  amount: Joi.string().min(1).max(10).required(),
  measure: Joi.string().min(1).max(10),
})

const removeShoppingListItem = Joi.object({
  recipeId: Joi.array().items(Joi.objectId()).required(),
})

const userBodySchemas = {
  signup,
  signin,
  patchUserData,
  postShoppingListItem,
  removeShoppingListItem,
}

const User = model('user', userSchema)

module.exports = { userBodySchemas, User }
