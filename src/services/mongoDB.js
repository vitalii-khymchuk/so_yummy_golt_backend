const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const connect = async (DB_HOST = "") => {
  try {
    await mongoose.connect(DB_HOST);
    console.log("Database connection successful");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = { connect };
