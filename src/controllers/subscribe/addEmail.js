const asyncHandler = require('express-async-handler')
const { SubscriptionService, sendEmail } = require('@services')
const { HttpError, emails } = require('@helpers')

const addEmail = async (req, res) => {
  const { email } = req.body

  if (!email) {
    throw HttpError(400, 'Please, provide your email.')
  }

  const success = await SubscriptionService.create(email)

  if (!success) {
    throw HttpError(500)
  }

  const { letter, text } = emails.subscribe.addEmailTemplate()

  await sendEmail(
    email,
    'Welcome to The SoYummy 🍃 - More than just a collection of recipes!',
    text,
    letter
  )

  res.status(201).json({ code: 201, message: 'success' })
}

module.exports = { addEmail: asyncHandler(addEmail) }
