const { Schema, model } = require('mongoose')
const { handleMongooseError } = require('@helpers')
const Joi = require('joi')

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

const subscriptionSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 50,
      match: emailRegexp,
      unique: true,
    },
  },
  { versionKey: false, timestamps: true }
)

subscriptionSchema.post('save', handleMongooseError)

const add = Joi.object({
  email: Joi.string()
    .min(3)
    .max(50)
    .email({ tlds: { deny: ['ru'] } })
    .pattern(emailRegexp)
    .required(),
})

const subscriptionBodySchemas = {
  add,
}

const Subscription = model('subscription', subscriptionSchema)

module.exports = { subscriptionBodySchemas, Subscription }
