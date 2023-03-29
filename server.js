require("dotenv").config();
require("module-alias/register");
const app = require("./app");

const { mongoDB } = require("@services");
const { PORT = 3000, DB_HOST } = process.env;

const init = async () => {
  await mongoDB.connect(DB_HOST);
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
};

init();
