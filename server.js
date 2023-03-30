require('dotenv').config()
require('module-alias/register')
const app = require('./app')

const { mongoDB } = require('@services')
const { PORT = 3000, DB_HOST, NODE_ENV } = process.env

const init = async () => {
  await mongoDB.connect(DB_HOST)
  app.listen(PORT, () => {
    console.log(
      `Server is running on port: ${PORT}, mode: ${NODE_ENV}`.green.italic.bold
    )
  })
}

init()
