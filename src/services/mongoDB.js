const mongoose = require('mongoose')

mongoose.set('strictQuery', true)

const connect = async (DB_HOST = '') => {
  try {
    const db = await mongoose.connect(DB_HOST)
    console.log(
      `MongoDB is connected, DB name: ${db.connection.name}, on port ${db.connection.port}, on host ${db.connection.host}`
        .green.italic.bold
    )
  } catch (err) {
    console.log(err.message)
    process.exit(1)
  }
}

module.exports = { connect }
