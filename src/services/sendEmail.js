const nodemailer = require('nodemailer')

const { MAIL_SERVICE, MAIL_SERVICE_USER, MAIL_SERVICE_PASSWORD } = process.env

/**
 * Sends email to the provided email address
 *
 * @param {string} to list of receivers
 * @param {string} subject Subject line
 * @param {string} text plain text body
 * @param {string} html html body
 * @throws Will throw an error if there is no required arguments
 * @returns {boolean}
 *
 * @example
 * await sendEmail(
 *    'test@example.com',
 *    'Sending with Nodemailer is Fun',
 *    'and easy to do anywhere, even with Node.js',
 *    '<strong>and easy to do anywhere, even with Node.js</strong>'
 * )
 */
const sendEmail = async (to, subject, text, html = '') => {
  if (!to || !subject || !text) {
    throw new Error('Please, provide all the required parameters.')
  }

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: MAIL_SERVICE,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: MAIL_SERVICE_USER, // generated ethereal user
      pass: MAIL_SERVICE_PASSWORD, // generated ethereal password
    },
  })

  // send mail with defined transport object
  await transporter.sendMail({
    to,
    subject,
    text,
    html,
    from: `SoYummy ${MAIL_SERVICE_USER}`,
  })

  return true
}

module.exports = sendEmail
