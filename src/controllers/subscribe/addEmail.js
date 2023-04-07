const asyncHandler = require('express-async-handler')
const { SubscriptionService, sendEmail } = require('@services')
const { HttpError } = require('@helpers')

const addEmail = async (req, res) => {
  const { email } = req.body

  if (!email) {
    throw HttpError(400, 'Please, provide your email.')
  }

  const success = await SubscriptionService.create(email)

  if (!success) {
    throw HttpError(500)
  }

  const letter = `
    <h1 style="color:#8BAA36;text-align:center;font-family:'Segoe UI',Tahoma,Verdana,Arial,sans-serif">
        Be the first to see the new recipes!
    </h1>
    <br>
    <p style="font-size:14px;font-family:'Segoe UI',Tahoma,Verdana,Arial,sans-serif">
      We’ll now keep you posted about new recipes.
    </p>
    <br>
    <p style="font-size:14px;font-family:'Segoe UI',Tahoma,Verdana,Arial,sans-serif">
      Thanks,<br>
      The SoYummy team
    </p>
    <p style="color:grey;font-size:80%;font-family:'Segoe UI',Tahoma,Verdana,Arial,sans-serif">
      You’ve received this email because you signed up for a SoYummy newsletter
    </p>
  `

  const text = `
    Be the first to see the new recipes!\n\r\n\r
    We’ll now keep you posted about new recipes.\n\r\n\r
    Thanks,\n\r
    The SoYummy team\n\r
    You’ve received this email because you signed up for a SoYummy newsletter
  `

  await sendEmail(
    email,
    'Welcome to The SoYummy 🍃 - More than just a collection of recipes!',
    text,
    letter
  )

  res.status(201).json({ code: 201, message: 'success' })
}

module.exports = { addEmail: asyncHandler(addEmail) }
